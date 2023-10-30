import { CDBBox, CDBIcon, CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';
import { Button, Stack } from 'react-bootstrap'
import EditInventory from './EditInventory';
import { useState } from 'react';
<link rel="stylesheet" href="table.css" />

const ViewObjectInventory = () => {

    // For modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <EditInventory show={show} handleClose={handleClose} />
            <h2 style={{ margin: '10px' }}>Visualizar objeto</h2>
            <hr />

            <CDBBox display='flex' flex='fill' style={{ backgroundColor: '#D9D9D9' }} my={3}>
                <h2 style={{ marginTop: '5px', marginLeft: '6px', fontWeight: 'bold', fontSize: '28px', color: '#3F3E3E' }}>Pizarrón</h2>
            </CDBBox>
            <div style={{ borderRadius: '10px', overflow: 'hidden', width: '95%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}>
                <CDBTable scrollY className="mb-0">
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
            <Stack direction='horizontal' gap={3} className='mx-5 mt-5 mb-3'>
                <Button variant='secondary' size='lg'>
                    <CDBIcon icon='angle-left' className='me-3' />
                    Regresar
                </Button>
                <Button className='ms-auto' variant='outline-danger' size='lg'>
                    <CDBIcon icon='calendar-minus' className='me-3' />
                    Eliminar
                </Button>
                <Button variant='primary' size='lg' onClick={handleShow}>
                    <CDBIcon icon='pen' className='me-3' />
                    Editar
                </Button>
            </Stack>
        </>
    )
}

export default ViewObjectInventory