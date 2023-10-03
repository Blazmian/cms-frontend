import { CDBBox, CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact"
import { useState } from "react"
import { Form, Modal, Button, Container } from "react-bootstrap"

const ViewAssistedEvents = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Visualizar eventos auxiliados</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ backgroundColor: '#ABABAB'}}>
                    <Container fluid className='ms-0 pt-1 px-6 pb-1 d-flex align-items-center' style={{ backgroundColor: '#D9D9D9'}}>
                        <img
                            src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                            width={100}
                            height={100}
                            style={{ borderRadius: '60px' }}
                            alt='Mina'
                            className='mx-0'
                        />
                        <Container fluid>
                            <h5 className={'fw-bold'} >Nombre del auxiliar</h5>
                            <h6 className='fs-5' style={{ textAlign: 'justify' }}>Erick Jimenez</h6>
                        </Container>
                    </Container>

                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <CDBTable striped hover responsive maxHeight="50vh" scrollY className="mb-0">
                            <CDBTableHeader>
                                <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                                    <th style={{ backgroundColor: 'black', color: 'white' }}>Nombre del evento</th>
                                    <th style={{ backgroundColor: 'black', color: 'white' }}>Empresa</th>
                                    <th style={{ backgroundColor: 'black', color: 'white' }}>Fecha</th>
                                </tr>
                            </CDBTableHeader>
                            <CDBTableBody>
                                <tr >
                                    <td>Nombre de prueba</td>
                                    <td>Empresa Prueba A.C.</td>
                                    <td>00:00 DD/MM/AAAA</td>
                                </tr>
                                <tr>
                                    <td>Nombre de prueba</td>
                                    <td>Empresa Prueba A.C.</td>
                                    <td>00:00 DD/MM/AAAA</td>
                                </tr>
                                <tr>
                                    <td>Nombre de prueba</td>
                                    <td>Empresa Prueba A.C.</td>
                                    <td>00:00 DD/MM/AAAA</td>
                                </tr>
                                <tr>
                                    <td>Nombre de prueba</td>
                                    <td>Empresa Prueba A.C.</td>
                                    <td>00:00 DD/MM/AAAA</td>
                                </tr>
                                <tr>
                                    <td>Nombre de prueba</td>
                                    <td>Empresa Prueba A.C.</td>
                                    <td>00:00 DD/MM/AAAA</td>
                                </tr>
                                <tr>
                                    <td>Nombre de prueba</td>
                                    <td>Empresa Prueba A.C.</td>
                                    <td>00:00 DD/MM/AAAA</td>
                                </tr>
                                <tr>
                                    <td>Nombre de prueba</td>
                                    <td>Empresa Prueba A.C.</td>
                                    <td>00:00 DD/MM/AAAA</td>
                                </tr>
                                <tr>
                                    <td>Nombre de prueba</td>
                                    <td>Empresa Prueba A.C.</td>
                                    <td>00:00 DD/MM/AAAA</td>
                                </tr>
                                <tr>
                                    <td>Nombre de prueba</td>
                                    <td>Empresa Prueba A.C.</td>
                                    <td>00:00 DD/MM/AAAA</td>
                                </tr>

                            </CDBTableBody>
                        </CDBTable>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Regresar</Button>
                </Modal.Footer>

            </Modal>
        </>
    )

}

export default ViewAssistedEvents