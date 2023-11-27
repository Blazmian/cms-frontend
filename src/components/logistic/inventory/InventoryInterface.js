import React, { useContext, useEffect, useState } from 'react';
import { CDBBox, CDBIcon } from 'cdbreact';
import { Button, Container, Form, InputGroup, Stack } from 'react-bootstrap';
import CreateObject from './CreateInventory';
import axios from "axios";
import { ApiUrls } from "../../../tools/ApiUrls";
import {
    SearchOutlined
} from '@ant-design/icons';
import ShowInventory from './ShowInventory';

const InventoryInterface = () => {

    // For modal component
    const [showViewInventory, setShowViewInventory] = useState(false);
    const handleCloseViewInventory = () => setShowViewInventory(false);
    const handleShowViewInventory = () => setShowViewInventory(true);

    const [inventory, setInventory] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getInventory()

    }, [])

    const getInventory = async () => {
        const res = await axios.get(urls.getAllInventory)
        setInventory(res.data)
    }

    const [search, setSearch] = useState('')


    return (
        <>
            <CreateObject show={showViewInventory} handleClose={handleCloseViewInventory} handleUpdateTable={getInventory} />
            <Stack direction='horizontal' className='mt-3 mx-3'>
                <CDBIcon icon="archive" size='lg' className='me-2' />
                <h3 className='fw-bold m-0 me-auto'>Inventario</h3>

                <Form style={{ marginRight: '15px', marginTop: '10px' }}>
                    <InputGroup style={{ width: '600px' }}>
                        <span class="input-group-text" id="basic-addon1"><SearchOutlined /></span>
                        <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Buscar objeto'></Form.Control>
                    </InputGroup>
                </Form>

                <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={handleShowViewInventory}>
                    <CDBIcon icon="cart-plus" className='me-2' />Agregar objeto
                </Button>
            </Stack>
            <hr className='mx-3' />
            <div style={{ borderRadius: '10px', overflow: 'hidden', width: '97%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
                <ShowInventory inventory={inventory} />
            </div>
        </>
    )
}

export default InventoryInterface
