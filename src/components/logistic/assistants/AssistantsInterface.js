import React, { useContext, useEffect, useState } from 'react';
import { CDBBox, CDBIcon } from 'cdbreact';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
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
            <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Listado del personal auxiliar</h3>
                </CDBBox>

                <Form style={{ marginRight: '15px', marginTop: '10px' }}>
                    <InputGroup style={{ width: '600px' }}>
                        <span class="input-group-text" id="basic-addon1"><SearchOutlined /></span>
                        <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Buscar auxiliar'></Form.Control>
                    </InputGroup>
                </Form>

                <CDBBox display='flex'>
                    <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={handleShow}>
                        <CDBIcon icon='plus-circle' className='me-2' />Agregar auxiliar
                    </Button>
                </CDBBox>
            </CDBBox>
            <div style={{ maxHeight: '84vh', overflowY: 'auto' }}>
            <ShowAssistants assistants={assitants}/>
            </div>
        </>
    )
}

export default AssistantsInterface