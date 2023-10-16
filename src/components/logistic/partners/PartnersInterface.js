import { CDBBox, CDBIcon } from "cdbreact"
import { useContext, useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import CreatePartner from "./CreatePartner"
import axios from "axios"
import { ApiUrls } from "../../../tools/ApiUrls"

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
                <Container fluid>
                    {partners.map((partner) => (
                        <CDBBox display='flex' flex='fill' style={{ backgroundColor: '#EEEEEE', borderRadius: '15px' }} p={2} my={2}>
                            <CDBBox display='flex' flex='fill' alignItems='center' >
                                <img
                                    src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                    width={50}
                                    height={50}
                                    style={{ borderRadius: '60px' }}
                                    alt='Mina'
                                />
                                <Container className='ms-2'>
                                    <h6>{partner.comercial_name}</h6>
                                    <p className='m-0'>{partner.folio}</p>
                                </Container>
                            </CDBBox>
                            <CDBBox display='flex' className='me-2'>
                                {partner.status}
                            </CDBBox>
                        </CDBBox>
                    ))}
                </Container>
            </div>
        </>
    )
}

export default PartnersInterface