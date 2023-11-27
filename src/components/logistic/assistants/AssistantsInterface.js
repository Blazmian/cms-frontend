import React, { useContext, useEffect, useState } from 'react';
import {CDBIcon } from 'cdbreact';
import { Button, Form, InputGroup, Stack } from 'react-bootstrap';
import AddAssistant from './AddAssistant';
import axios from "axios";
import { ApiUrls } from "../../../tools/ApiUrls";
import {
    SearchOutlined
} from '@ant-design/icons';
import ShowAssistants from './ShowAssistants';

const AssistantsInterface = () => {

    // For modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [assitants, setAssistants] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getAssistants()
    }, [])

    const getAssistants = async () => {
        const res = await axios.get(urls.getAllAssistant)
        setAssistants(res.data)
    }

    const [search, setSearch] = useState('')

    return (
        <>
            <AddAssistant show={show} handleClose={handleClose} handleUpdateTable={getAssistants} />
            <Stack direction='horizontal' className='mt-3 mx-3'>
                <CDBIcon icon="users" size='lg' className='me-2' />
                <h3 className='fw-bold m-0 me-auto'>Personal auxiliar</h3>

                <Form style={{ marginRight: '15px', marginTop: '10px' }}>
                    <InputGroup style={{ width: '600px' }}>
                        <span class="input-group-text" id="basic-addon1"><SearchOutlined /></span>
                        <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Buscar auxiliar'></Form.Control>
                    </InputGroup>
                </Form>

                <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={handleShow}>
                    <CDBIcon icon="user-plus" className='me-2' />Agregar auxiliar
                </Button>
            </Stack>
            <hr className='mx-3' />
            <div style={{ maxHeight: '84vh', overflowY: 'auto' }}>
            <ShowAssistants assistants={assitants}/>
            </div>
        </>
    )
}

export default AssistantsInterface