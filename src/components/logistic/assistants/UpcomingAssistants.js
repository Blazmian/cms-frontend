import React, { useState } from 'react';
import { CDBBox, CDBIcon } from 'cdbreact';
import { Button, Container } from 'react-bootstrap';
import AddAssistant from './AddAssistant';

const UpcomingAssistants = () => {

    // For modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <AddAssistant show={show} handleClose={handleClose} />
            <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Listado del personal auxiliar</h3>
                </CDBBox>
                <CDBBox display='flex'>
                    <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={handleShow}>
                        <CDBIcon icon='plus-circle' className='me-2' />Agregar auxiliar
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
                                <h6>Nombre del personal auxiliar</h6>
                            </Container>
                        </CDBBox>
                    </CDBBox>
                </Container>
            </div>
        </>
    )
}

export default UpcomingAssistants