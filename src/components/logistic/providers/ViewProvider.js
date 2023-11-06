import { useContext, useEffect, useState } from "react"
import { CDBBox } from "cdbreact"
import { Button, Container } from "react-bootstrap"
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
    <CreateProduct show={show} handleClose={handleClose} idProvider={id}/> 
        <h2 style={{ margin: '10px' }}>Visualizar proveedor</h2>
        <hr/>
        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
            <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Nombre del proveedor:  </h5>
            <h5 className='fs-5' style={{ textAlign: 'justify' }}>{provider.name}</h5>
        </CDBBox>
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

        <Container fluid className="p-3">
                <h2 style={{fontSize:'20px', fontWeight:'bold', marginTop:'-10px'}}>Productos</h2>
                <div style={{ borderRadius: '10px', overflow: 'hidden'}}>
                <CDBTable striped hover responsive maxHeight="22vh" scrollY className="mb-0">
                    <CDBTableHeader>
                        <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Producto</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Descripción</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Precio</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        <tr >
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                    </CDBTableBody>
                </CDBTable>
                
                </div>
            </Container>
            
        <Button variant="secondary" style={{ marginLeft: '35px', marginTop: '15px' }} onClick={() => navigate('/logistica/proveedores')}>Regresar</Button>
        <Button variant="primary" style={{ marginLeft: '700px', marginTop: '15px' }} onClick={confirmDeleteProvider}>Eliminar</Button>
        <Button variant="primary" style={{ marginLeft: '15px', marginTop: '15px' }} onClick={handleShowModalEdit}>Editar</Button>
        <Button onClick={handleShow} variant="primary" style={{ marginLeft: '15px', marginTop: '15px' }}>Agregar producto</Button>
       
    </>
)
}

export default ViewProvider