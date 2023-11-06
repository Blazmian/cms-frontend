import React, { useContext, useEffect, useState } from 'react';
import { CDBBox, CDBIcon } from 'cdbreact';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
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
            <CreateObject show={showViewInventory} handleClose={handleCloseViewInventory} />
            <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Inventario</h3>
                </CDBBox>
                <CDBBox display='flex'>
                    <Form style={{ marginRight: '15px', marginTop: '10px' }}>
                        <InputGroup style={{ width: '600px' }}>
                            <span class="input-group-text" id="basic-addon1"><SearchOutlined /></span>
                            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Buscar objeto'></Form.Control>
                        </InputGroup>
                    </Form>
                    <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold', marginTop: '10px' }} onClick={handleShowViewInventory}>
                        <CDBIcon icon='plus-circle' className='me-2' />Agregar objeto
                    </Button>
                </CDBBox>
            </CDBBox>
            <div style={{ borderRadius: '10px', overflow: 'hidden', width: '97%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
            <ShowInventory inventory={inventory}/>
            </div>
        </>
    )
}

export default InventoryInterface
