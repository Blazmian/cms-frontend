import { useContext, useEffect, useState } from "react"
import { CDBBox, CDBIcon } from "cdbreact"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios, { } from 'axios'
import ShowProviders from "./ShowProviders"
import { useNavigate } from "react-router-dom"
import ViewProvider from "./ViewProvider"
import { Button, Stack } from 'react-bootstrap';

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
        <Stack direction='horizontal' className='mt-3 mx-3'>
                <CDBIcon icon='people-arrows' size='lg' className='me-2' />
                <h3 className='fw-bold m-0 me-auto'>Proveedores</h3>
                <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={() => navigate('/logistica/crear-proveedor')}>
                    Crear proveedor
                </Button>
            </Stack>
            <hr className='mx-3' />
            
            <div style={{ maxHeight: '84vh', overflowY: 'auto' }}>
                <ShowProviders providers={providers} />
            </div>
        </>
    )
}

export default Providers