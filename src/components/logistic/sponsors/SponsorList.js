import React, { useState } from 'react';
import { CDBBox, CDBIcon } from 'cdbreact';
import { Button, Form, InputGroup, Container } from 'react-bootstrap';
import AddSponsor from './AddSponsor';
import {
    SearchOutlined
} from '@ant-design/icons';


const SponsorList = () => {

    // For modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [search, setSearch] = useState('')
    
    return (
        <>
            <AddSponsor show={show} handleClose={handleClose} />
            <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Listado de patrocinadores</h3>
                </CDBBox>
                <Form style={{marginRight:'15px', marginTop:'10px'}}>
                            <InputGroup style={{width:'600px'}}>
                                <span class="input-group-text" id="basic-addon1"><SearchOutlined/></span>
                                <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Buscar patrocinador'></Form.Control>
                            </InputGroup>
                        </Form>
                <CDBBox display='flex'>
                    <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={handleShow}>
                        <CDBIcon icon='plus-circle' className='me-2' />Agregar
                    </Button>
                </CDBBox>
            </CDBBox>
            <div style={{ maxHeight: '84vh', overflowY: 'auto' }}>
                <Container fluid>
                    <CDBBox display='flex' flex='fill' style={{ backgroundColor: '#EEEEEE', borderRadius: '15px' }} p={2} my={2}>
                        <CDBBox display='flex' flex='fill' alignItems='center' >
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={50}
                                height={50}
                                style={{ borderRadius: '60px' }}
                                alt='Mina'
                            />
                            <Container className='ms-2'>
                                <h6>Nombre del patrocinador 1</h6>
                                <p className='m-0'>Patrocinio</p>
                            </Container>
                        </CDBBox>
                    </CDBBox>
                </Container>
            </div>
        </>
    )
}

export default SponsorList
