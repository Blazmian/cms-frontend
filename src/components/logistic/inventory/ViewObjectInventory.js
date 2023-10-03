import { CDBBox } from "cdbreact"
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';

import { Modal, Button } from "react-bootstrap"
<link rel="stylesheet" href="table.css"/>

const ViewObjectInventory = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Visualizar objeto del inventario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <CDBBox  display='flex' flex='column' style={{ backgroundColor: '#ABABAB', borderRadius:'5px' }}>
                    <CDBBox  display='flex' flex='fill' style={{ backgroundColor: '#D9D9D9' }} my={3}>
                        <h2 style={{marginTop:'5px', marginLeft:'6px',fontWeight:'bold', fontSize:'28px', color:'#3F3E3E'}}>Pizarrón</h2>
                    </CDBBox>
                        <div style={{ borderRadius: '10px', overflow: 'hidden', width:'95%', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}}>
                            <CDBTable responsive maxHeight="32vh" scrollY className="mb-0">
                                <CDBTableHeader>
                                    <tr class="table-dark">
                                        <th>Estado</th>
                                        <th>Poseedor</th>
                                        <th>Fecha</th>
                                    </tr>
                                </CDBTableHeader>
                                    <CDBTableBody>
                                        <tr class="table-secondary">
                                            <td>En uso para evento</td>
                                            <td>Erick J.</td>
                                            <td>DD/MM/AAAA</td>
                                        </tr>
                                        <tr class="table-secondary">
                                            <td>En uso para evento</td>
                                            <td>Erick J.</td>
                                            <td>DD/MM/AAAA</td>
                                        </tr>
                                        <tr class="table-secondary">
                                            <td>En uso para evento</td>
                                            <td>Erick J.</td>
                                            <td>DD/MM/AAAA</td>
                                        </tr>
                                        <tr class="table-secondary">
                                            <td>En uso para evento</td>
                                            <td>Erick J.</td>
                                            <td>DD/MM/AAAA</td>
                                        </tr>
                                        <tr class="table-secondary">
                                            <td>En uso para evento</td>
                                            <td>Erick J.</td>
                                            <td>DD/MM/AAAA</td>
                                        </tr>
                                        <tr class="table-secondary">
                                            <td>En uso para evento</td>
                                            <td>Erick J.</td>
                                            <td>DD/MM/AAAA</td>
                                        </tr>
                                        <tr class="table-secondary">
                                            <td>En uso para evento</td>
                                            <td>Erick J.</td>
                                            <td>DD/MM/AAAA</td>
                                        </tr>
                                    </CDBTableBody>
                            </CDBTable>
                        </div>
                    </CDBBox>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Cancelar</Button>
                    <Button variant="primary">Eliminar</Button>
                    <Button variant="primary">Editar</Button>
                </Modal.Footer>

            </Modal>
        </> 
    )
}

export default ViewObjectInventory