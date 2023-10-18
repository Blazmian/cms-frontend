import { CDBBox, CDBIcon } from "cdbreact"
import { useContext, useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import CreatePartner from "./CreatePartner"
import axios from "axios"
import { ApiUrls } from "../../../tools/ApiUrls"
import '../../../styles/Partner.css'
import InfoPartner from "./InfoPartner"
import ShowPartners from "./ShowPartners"

const PartnersInterface = () => {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const [partners, setPartners] = useState([])

    const urls = useContext(ApiUrls)

    useEffect(() => {
        getPartners()
    }, [])

    const getPartners = async () => {
        // Abrir consola: ctrl + shift + i
        const res = await axios.get(urls.getAllPartners)
        setPartners(res.data)
    }

    return (
        <>
            <CreatePartner show={show} handleClose={handleClose} handleUpdateTable={getPartners} />
            <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Listado de Socios</h3>
                </CDBBox>
                <CDBBox display='flex'>
                    <Button onClick={handleShow} variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }}>
                        <CDBIcon icon='plus-circle' className='me-2' />Crear Socio
                    </Button>
                </CDBBox>
            </CDBBox>
            <div style={{ maxHeight: '84vh', overflowY: 'auto' }}>
                <ShowPartners partners={partners} handleUpdatePartners={getPartners} />
            </div>
        </>
    )
}

export default PartnersInterface