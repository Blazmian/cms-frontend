import { CDBBox, CDBIcon, CDBTable, CDBTableBody, CDBTableHeader } from 'cdbreact'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import EditAssistant from './EditAssistant';
import { useContext, useEffect, useState } from 'react';
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


const ViewAssistants = () => {

    const navigate = useNavigate('')

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getAssistant()

        }
    }, [id])

    const urls = useContext(ApiUrls)

    const [assistant, setAssistant] = useState([])

    const getAssistant = async () => {
        const res = await axios.get(urls.getOneAssitant + id)
        setAssistant(res.data)
        console.log(res.data)
    }


    const confirmDeleteAssistant = () => {
        Swal.fire({
            icon: 'warning',
            Title: 'Precaucion',
            Text: '¿estas seguro que quieres eliminar?' + assistant.name + '?',
            showCancelButton: true,
            confirmButtonText: 'eliminar',
            cancelButtonText: 'cancelar',
            focusCancel: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAssistant()
                navigate('/logistica/personal-auxiliar')
            } else if (result.isDenied) {

            }
        })
    }

    const deleteAssistant = async () => {
        const res = await axios.delete(urls.deleteAssistant + id)
        toast.success()
        getAssistant()
    }

    // For modal component
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    return (
        <>
            <EditAssistant handleUpdateAssistant={getAssistant} show={showEdit} handleClose={handleCloseEdit} Assistant={assistant} handleUpdateTable={getAssistant} />
            <Container className="d-flex align-items-center mt-3" fluid>
                <Button variant="dark" style={{ borderRadius: '30px', height: '50px', width: '50px' }} onClick={() => navigate('/logistica/personal-auxiliar/')}>
                    <CDBIcon icon="angle-left" size="2x" />
                </Button>
                <h2 className="ms-2 fw-bold">Visualizar auxiliar</h2>
            </Container>
            <hr />
            <Container>
                <Row>
                    <Col>
                        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill'>
                            <h4 className={'fw-bold fs-5 me-3'} ><CDBIcon icon="user " />Nombre del auxiliar:</h4>
                            <h4 className='fs-5' style={{ textAlign: 'justify' }}>{assistant.name} {assistant.lastname}</h4>
                        </CDBBox>
                    </Col>
                    <Col>
                        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill'>
                            <h4 className={'fw-bold fs-5 me-3'} ><CDBIcon icon="envelope " />Correo electrónico:</h4>
                            <h4 className='fs-5' style={{ textAlign: 'justify' }}>{assistant.email}</h4>
                        </CDBBox>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' >
                            <h4 className={'fw-bold fs-5 me-3'} ><CDBIcon icon="comment-dots " />Descripción:</h4>
                            <h4 className='fs-5' style={{ textAlign: 'justify' }}>{assistant.description}</h4>
                        </CDBBox>
                    </Col>
                    <Col>
                        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' >
                            <h4 className={'fw-bold fs-5 me-3'} ><CDBIcon icon="phone " />Teléfono:</h4>
                            <h4 className='fs-5' style={{ textAlign: 'justify' }}>{assistant.cellphone}</h4>
                        </CDBBox>
                    </Col>
                </Row>
            </Container>

            <Button variant='outline-danger' size='lg' style={{ marginLeft: '850px', marginRight: '50px' }} onClick={confirmDeleteAssistant}>
                <CDBIcon icon='user-minus'/>
                Eliminar
            </Button>
            <Button variant='primary' size='lg' onClick={handleShowEdit}>
                <CDBIcon icon='pen'/>
                Editar
            </Button>
            <hr />

            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <CDBTable striped hover responsive maxHeight="50vh" scrollY className="mb-0">
                    <CDBTableHeader>
                        <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Nombre del evento</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Area</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Fecha</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        {assistant && assistant.detail && assistant.detail.map((detail) => (
                            <tr key={detail.id}>
                                <td>{detail.event.event_name}</td>
                                <td>{detail.area}</td>
                                <td>{detail.event.date}</td>
                            </tr>
                        ))}
                    </CDBTableBody>
                </CDBTable>
            </div>
        </>
    )
}

export default ViewAssistants