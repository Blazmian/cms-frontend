import { useContext, useEffect, useState } from "react"
import { CDBBox, CDBIcon } from "cdbreact"
import { Button, Container } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios, { } from 'axios'
import ShowProviders from "./ShowProviders"
import { useNavigate } from "react-router-dom"
import ViewProvider from "./ViewProvider"

const Providers = () => {

    const navigate = useNavigate('')
    const [providers, setProviders] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getProviders()
    }, [])

    const getProviders = async () => {
        const res = await axios.get(urls.getAllProviders)
        setProviders(res.data)
    }

    return (
        <>
            <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Listado de Proveedores</h3>
                </CDBBox>
                <CDBBox display='flex'>
                    <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={() => navigate('/logistica/crear-proveedor')}>
                        <CDBIcon icon='plus-circle' className='me-2' />Crear Proveedor
                    </Button>
                </CDBBox>
            </CDBBox>
            <div style={{ maxHeight: '84vh', overflowY: 'auto' }}>
                <ShowProviders providers={providers} />
            </div>
        </>
    )
}

export default Providers