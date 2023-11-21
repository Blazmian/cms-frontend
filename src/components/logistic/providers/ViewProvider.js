import { useContext, useEffect, useState } from "react"
import { CDBBox, CDBIcon } from "cdbreact"
import { Button, Container, Stack, Row, Col } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios, { } from 'axios'
import Swal from "sweetalert2"
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"
import CreateProduct from "./CreateProduct"
import EditProvider from "./EditProviders"
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';
import ViewProduct from "./ViewProduct"

const ViewProvider = ({}) => {
    const navigate = useNavigate('')
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const { id } = useParams()

    useEffect(() => {
        getProvider()
    }, [id])

    const urls = useContext(ApiUrls)
    const [provider, setProvider] = useState({})

    const getProvider = async () => {
        const res = await axios.get(urls.getOneProvider + id)
        console.log(res.data)
        setProvider(res.data)
    }

    const confirmDeleteProvider = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Precaución',
            text: '¿Estas seguro de eliminar al proveedor ' + provider.name + '?',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProvider()
            } else if (result.isDenied) {

            }
        })
    }

    const deleteProvider = async () => {
        const res = await axios.delete(urls.deleteProvider + id)
        toast.custom((t) => (<ToastManager title={'Excelente'} text={'Proveedor eliminado correctamente'} type={'success'} />))
        navigate('/logistica/proveedores')
    }

    const [showModalEdit, setShowModalEdit] = useState(false)
    const handleShowModalEdit = () => setShowModalEdit(true)
    const handleCloseModalEdit = () => setShowModalEdit(false)

    return (
        <>
            <EditProvider handleUpdatePartner={getProvider} show={showModalEdit} handleClose={handleCloseModalEdit} provider={provider} />
            <CreateProduct show={show} handleClose={handleClose} idProvider={id} handleUpdateTable={getProvider}/>
            <Container className="d-flex align-items-center mt-3" fluid >
            <Button variant="dark" style={{ borderRadius: '30px', height: '50px', width: '50px' }} onClick={() => navigate('/logistica/proveedores')}>
                        <CDBIcon icon="angle-left" size="2x" />
                    </Button>
            <h2 className="m-0 ms-3 fw-bold">Información del proveedor</h2>
            </Container>

            <hr className="mx-3" />

            <Container >
            <Row>
                <Col>
                <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
                <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}><CDBIcon icon="user " />Nombre del proveedor:  </h5>
                <h5 className='fs-5' style={{ textAlign: 'justify' }}>{provider.name}</h5>
                </CDBBox>
                </Col>
                <Col>
                <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
                <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}><CDBIcon icon="envelope " />Correo electrónico:  </h5>
                <h5 className='fs-5' style={{ textAlign: 'justify' }}>{provider.email}</h5>
                </CDBBox>
                </Col>
            </Row>
            <Row>
                <Col>
                <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
                <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}><CDBIcon icon="phone " />Teléfono:  </h5>
                <h5 className='fs-5' style={{ textAlign: 'justify' }}>{provider.cellphone}</h5>
                </CDBBox>
                </Col>
                <Col>
                <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
                <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}><CDBIcon icon="comment-dots " />Descripción:  </h5>
                <h5 className='fs-5' style={{ textAlign: 'justify' }}>{provider.description}</h5>
                </CDBBox>
                </Col>
            </Row>
            </Container>
            
            <Stack direction='horizontal' gap={3} className='mx-5 mb-3 btn float-end'>
            <Button variant='outline-danger' onClick={confirmDeleteProvider}>Eliminar</Button>
            <Button variant='secondary' onClick={handleShowModalEdit}>Editar</Button>
            </Stack>

            <hr className="mx-3  " style={{marginTop:'70px'}} />

            <Container fluid className="p-3">
                <h2 style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '-10px' }}>Productos</h2>
                <CDBBox display='flex' alignItems="center" className='mb-3'>
                <Button onClick={handleShow} variant='warning' className="btn float-end">
                    <CDBIcon icon='plus' className='me-2'/>
                    Agregar producto
                </Button>
                </CDBBox>
                
                <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    {provider && provider.providerProduct ? <ViewProduct products={provider.providerProduct} /> : <></>}
                </div>
            </Container>

        </>
    )
}

export default ViewProvider