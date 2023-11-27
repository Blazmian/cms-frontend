import { CDBBox, CDBIcon, CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import EditInventory from './EditInventory';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ApiUrls } from '../../../tools/ApiUrls';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


const ViewObjectInventory = () => {

    const navigate = useNavigate('')


    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getInventory()

        }
    }, [id])

    const urls = useContext(ApiUrls)

    const [inventory, setInventory] = useState([])

    const getInventory = async () => {
        const res = await axios.get(urls.getOneInventory + id)
        setInventory(res.data)
        console.log(res.data)
    }

    const confirmDeleteInventory = () => {
        Swal.fire({
            icon: 'warning',
            Title: 'Precaucion',
            Text: '¿estas seguro que quieres eliminar?' + inventory.object + '?',
            showCancelButton: true,
            confirmButtonText: 'eliminar',
            cancelButtonText: 'cancelar',
            focusCancel: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteInventory()
                navigate('/logistica/inventario')
            } else if (result.isDenied) {

            }
        })
    }

    const deleteInventory = async () => {
        const res = await axios.delete(urls.deleteInventory + id)
        toast.success()
        getInventory()
    }


    // For modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <EditInventory show={show} handleClose={handleClose} Inventory={inventory} handleUpdateTable={getInventory}/>
            <Container className="d-flex align-items-center mt-3" fluid>
                <Button variant="dark" style={{ borderRadius: '30px', height: '50px', width: '50px' }} onClick={() => navigate('/logistica/inventario/')}>
                    <CDBIcon icon="angle-left" size="2x" />
                </Button>
                <h2 className="ms-2 fw-bold">{inventory.object}</h2>
            </Container>
            <hr />
            <Container>
                <Row>
                    <Col>
                        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill'>
                            <h4 className={'fw-bold fs-5 me-3'} ><CDBIcon icon="ring" />Nombre del objeto:</h4>
                            <h4 className='fs-5' style={{ textAlign: 'justify' }}>{inventory.object}</h4>
                        </CDBBox>
                    </Col>
                    <Col>
                        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill'>
                            <h4 className={'fw-bold fs-5 me-3'} ><CDBIcon icon="shapes" />Tipo:</h4>
                            <h4 className='fs-5' style={{ textAlign: 'justify' }}>{inventory.type}</h4>
                        </CDBBox>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' >
                            <h4 className={'fw-bold fs-5 me-3'} ><CDBIcon icon="align-left" />Descripción:</h4>
                            <h4 className='fs-5' style={{ textAlign: 'justify' }}>{inventory.description}</h4>
                        </CDBBox>
                    </Col>
                    <Col>
                        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' >
                            <h4 className={'fw-bold fs-5 me-3'} ><CDBIcon icon="heart" />Estado:</h4>
                            <h4 className='fs-5' style={{ textAlign: 'justify' }}>{inventory.status}</h4>
                        </CDBBox>
                    </Col>
                </Row>
            </Container>
            <Button variant='outline-danger' size='lg' style={{ marginLeft: '850px', marginRight: '50px' }} onClick={confirmDeleteInventory}>
                <CDBIcon icon='trash'/>
                Eliminar
            </Button>
            <Button variant='primary' size='lg' onClick={handleShow}>
                <CDBIcon icon='pen'/>
                Editar
            </Button>
            <hr />

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
                    </CDBTableBody>
                </CDBTable>
            </div>
        </>
    )
}

export default ViewObjectInventory