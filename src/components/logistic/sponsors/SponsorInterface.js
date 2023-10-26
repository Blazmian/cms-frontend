import { CDBBox, CDBIcon } from "cdbreact"
import { useContext, useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import CreateSponsor from "./CreateSponsor"
import axios from "axios"
import { ApiUrls } from "../../../tools/ApiUrls"
import '../../../styles/Sponsors.css'
import InfoSponsor from "./InfoSponsor.js"
import ShowSponsor from "./ShowSponsors"

const SponsorInterface = () => {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const [sponsors, setSponsors] = useState([])

    const urls = useContext(ApiUrls)

    /*useEffect(() => {
        getSponsors()
    }, [])*/

    /*const getSponsors = async () => {
        // Abrir consola: ctrl + shift + i
        const res = await axios.get(urls.getAllSponsors)
        setSponsors(res.data)
    }*/

    return (
        <>
            <CreateSponsor show={show} handleClose={handleClose}  />
            <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Listado de patrocinadores</h3>
                </CDBBox>
                <CDBBox display='flex'>
                    <Button onClick={handleShow} variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }}>
                        <CDBIcon icon='plus-circle' className='me-2' />Crear Socio
                    </Button>
                </CDBBox>
            </CDBBox>
            <div style={{ maxHeight: '84vh', overflowY: 'auto' }}>
                <ShowSponsor spornsors={sponsors}  />
            </div>
        </>
    )
}

export default SponsorInterface