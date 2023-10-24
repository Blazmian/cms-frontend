import { useContext, useEffect, useState } from "react"
import { CDBBox, CDBIcon } from "cdbreact"
import { Button, Container, Stack } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios, { } from 'axios'
import Swal from "sweetalert2"

const ViewProvider = ({show, idProvider, providers}) => {

    useEffect(() => {
        getProvider()
    }, [])

    const urls = useContext(ApiUrls)
    const [provider, setProvider] = useState({})

    const getProvider =  async () => {
        const res = await axios.get(urls.getOneProvider + 1)
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
        const res = await axios.delete(urls.deleteProvider + idProvider)
    }

return (
    <>

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
            <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Correo electronico:  </h5>
            <h5 className='fs-5' style={{ textAlign: 'justify' }}>{provider.name}</h5>
        </CDBBox>
        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
            <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Contacto:  </h5>
            <h5 className='fs-5' style={{ textAlign: 'justify' }}>(662) 232 3234</h5>
        </CDBBox>
        <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
            <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Area:  </h5>
            <h5 className='fs-5' style={{ textAlign: 'justify' }}>Técnico de sonido</h5>
        </CDBBox>
        <Container fluid>
            <CDBBox style={{ fontSize: '13px' }} display='flex' flex='fill' >
                <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '22px' }}>Descripcion:  </h5>
                <h5 className='fs-5' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
            </CDBBox>
            
        </Container>

        <hr />
        <Button variant="secondary" style={{ marginLeft: '35px', marginTop: '15px' }}>Regresar</Button>
        <Button variant="primary" style={{ marginLeft: '900px', marginTop: '15px' }} onClick={confirmDeleteProvider}>Eliminar</Button>
        <Button variant="primary" style={{ marginLeft: '35px', marginTop: '15px' }} >Editar</Button>
       
    </>
)
}

export default ViewProvider