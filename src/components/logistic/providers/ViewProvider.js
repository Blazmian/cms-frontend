import { useContext, useEffect, useState } from "react"
import { CDBBox, CDBIcon } from "cdbreact"
import { Button, Container, Stack } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios, { } from 'axios'
import Swal from "sweetalert2"
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"
import CreateProduct from "./CreateProduct"
import EditProvider from "./EditProviders"

const ViewProvider = () => {
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

    const getProvider =  async () => {
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
            if(result.isConfirmed) {
                deleteProvider()
            }else if (result.isDenied){

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
    <CreateProduct show={show} handleClose={handleClose}/> 
        <h2 style={{ margin: '10px' }}>Visualizar proveedor</h2>
        <hr/>
        <Container fluid className='m-0 pt-4 px-4 pb-3 d-flex align-items-center'>
            <img
                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                width={120}
                height={120}
                style={{ borderRadius: '60px' }}
                alt='Mina'
                className='mx-6'
            />
            <Container fluid>
                <h4 className={'fw-bold'} >Nombre del proveedor</h4>
                <h4 className='fs-4' style={{ textAlign: 'justify' }}>{provider.name}</h4>
            </Container>
        </Container>
        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
            <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Correo electrónico:  </h5>
            <h5 className='fs-5' style={{ textAlign: 'justify' }}>{provider.email}</h5>
        </CDBBox>
        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
            <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Teléfono:  </h5>
            <h5 className='fs-5' style={{ textAlign: 'justify' }}>{provider.cellphone}</h5>
        </CDBBox>
        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
            <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Descripción:  </h5>
            <h5 className='fs-5' style={{ textAlign: 'justify' }}>{provider.description}</h5>
        </CDBBox>

        <hr />
        <Button variant="secondary" style={{ marginLeft: '35px', marginTop: '15px' }} onClick={() => navigate('/logistica/proveedores')}>Regresar</Button>
        <Button variant="primary" style={{ marginLeft: '700px', marginTop: '15px' }} onClick={confirmDeleteProvider}>Eliminar</Button>
        <Button variant="primary" style={{ marginLeft: '15px', marginTop: '15px' }} onClick={handleShowModalEdit}>Editar</Button>
        <Button onClick={handleShow} variant="primary" style={{ marginLeft: '15px', marginTop: '15px' }}>Agregar producto</Button>
       
    </>
)
}

export default ViewProvider