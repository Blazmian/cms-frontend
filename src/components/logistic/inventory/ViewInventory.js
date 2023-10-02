import React, { useState } from 'react';
import { CDBBox, CDBIcon } from 'cdbreact';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import CreateObject from './CreateInventory';
import EditInventory from './EditInventory';
import ViewObjectInventory from './ViewObjectInventory';
import DeleteObject from './DeleteObjectInventory';
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';
import {data} from './data'
import {
    SearchOutlined
} from '@ant-design/icons';

const ViewInventory = () => {

    // For modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [search, setSearch] = useState('')

    return (
        <>
            <ViewObjectInventory show={show} handleClose={handleClose} />

            <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Inventario</h3>
                </CDBBox>
                <CDBBox display='flex'>
                        <Form style={{marginRight:'15px', marginTop:'10px'}}>
                            <InputGroup style={{width:'600px'}}>
                                <span class="input-group-text" id="basic-addon1"><SearchOutlined/></span>
                                <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Buscar objeto'></Form.Control>
                            </InputGroup>
                        </Form>
                            <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold', marginTop:'10px' }} onClick={handleShow}>
                                <CDBIcon icon='plus-circle' className='me-2' />Agregar objeto
                            </Button>
                </CDBBox>
            </CDBBox>
            <div style={{ borderRadius: '10px', overflow: 'hidden', width:'97%', marginLeft:'auto', marginRight:'auto', marginTop:'20px'}}>
                <CDBTable striped hover responsive maxHeight="70vh" scrollY className="mb-0">
                    <CDBTableHeader>
                        <tr>
                            <th style={{ backgroundColor: '#AFAFAF' }}>Nombre</th>
                            <th style={{ backgroundColor: '#AFAFAF' }}>Descripción</th>
                            <th style={{ backgroundColor: '#AFAFAF' }}>Tipo</th>
                            <th style={{ backgroundColor: '#AFAFAF' }}>Estado</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody onClick={handleShow}>
                        {data
                            .filter((item) =>{
                                return search.toLowerCase() === '' 
                                    ? item 
                                    : item.object_name.toLowerCase().includes(search);
                        })
                        .map((item) =>(
                        <tr key={item.id}>
                            <td>{item.object_name}</td>
                            <td>{item.description}</td>
                            <td>{item.type}</td>
                            <td style={{ display:'flex'}}><div 
                                    style={{alignItems:'center', marginTop:'2px', marginRight:'5px', width: '20px', height: '20px', borderRadius: '5px', ... (item.status.includes("Disponible") ? { backgroundColor: '#64B04C' } : item.status.includes('En uso') ? { backgroundColor: '#E55252' } : { backgroundColor: 'rgb(32, 167, 32)' }) }}
                                />{item.status} 
                                </td>
                        </tr>
                        ))}
                        
                    </CDBTableBody>
                </CDBTable>
            </div>
        </>
    )
}

export default ViewInventory
