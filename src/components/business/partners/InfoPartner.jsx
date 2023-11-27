import { CDBBox, CDBIcon } from "cdbreact"
import { useContext, useEffect, useState } from "react"
import { Button, Container, Stack } from "react-bootstrap"
import { NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"
import Tracking from "./Tracking/Tracking"
import Documents from "./Documents"

const InfoPartner = () => {

    const [partner, setPartner] = useState({})
    const navigate = useNavigate('')
    const { folio } = useParams()

    const urls = useContext(ApiUrls)

    useEffect(() => {
        getInfoPartner()
    }, [folio])

    const getInfoPartner = async () => {
        const res = await axios.get(urls.getOnePartner + folio)
        setPartner(res.data)
    }

    return (
        <>
            <CDBBox p={3} display='flex' alignItems="center" style={{ backgroundColor: '#272727', color: 'white' }}>
                <Button
                    variant="secondary"
                    className="d-flex justify-content-center align-items-center p-0"
                    style={{ borderRadius: '30px', height: '40px', width: '40px' }}
                    onClick={() => navigate('/negocios/socios')}>
                    <CDBIcon
                        icon="angle-left"
                        size="lg"
                    />
                </Button>
                <h4 className="m-0 ms-3 fw-bold me-auto">Información del socio</h4>
                <Button className='me-2' variant='danger'>
                    <CDBIcon icon='ban' className='me-3' />
                    Cancelar socio
                </Button>
                <Button variant='primary'>
                    <CDBIcon far icon='edit' className='me-3' />
                    Modificar socio
                </Button>
            </CDBBox>
            <Container fluid className='px-4 pt-4 pb-3' style={{ backgroundColor: '#EFEFEF' }}>
                <Container fluid className='d-flex align-items-center p-0'>
                    <img
                        src={'https://smbb.mx/wp-content/uploads/2022/09/user.png'}
                        width={100}
                        height={100}
                        style={{ borderRadius: '60px' }}
                        alt='Socio'
                        className='mx-4'
                    />
                    <Container fluid className="d-flex">
                        <Stack gap={2}>
                            <h3 className='mb-0 fw-bold'>{partner.comercial_name}</h3>
                            <h5 className="mb-0 fw-normal">{partner.social_reason}</h5>
                            <h6 className="fw-normal">{partner.folio}</h6>
                        </Stack>
                        <Stack gap={2} className='justify-content-center'>
                            <CDBBox display="flex" alignItems="center" justifyContent="end">
                                <div style={{ height: '13px', width: '13px', borderRadius: '10px', backgroundColor: 'green' }} />
                                <h6 className="fw-medium ms-2 mb-0">Activo</h6>
                            </CDBBox>
                            <CDBBox display="flex" alignItems="center" justifyContent="end">
                                <CDBIcon icon="calendar" />
                                <h6 className="fw-normal ms-2 mb-0">Fecha de registro: {partner.registration_date && partner.registration_date.toString().split('T')[0]}</h6>
                            </CDBBox>
                            <CDBBox display="flex" alignItems="center" justifyContent="end" color="danger">
                                <CDBIcon icon="calendar-minus" />
                                <h6 className="fw-normal ms-2 mb-0">Fecha de expiración: {partner.registration_date && partner.expiration_date.toString().split('T')[0]}</h6>
                            </CDBBox>
                        </Stack>
                    </Container>
                </Container>
            </Container >
            <Container className='d-flex justify-content-center py-2' fluid style={{ backgroundColor: '#D9D9D9' }}>
                <NavLink to={`/negocios/socios/${folio}/seguimiento`} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='mx-5 mb-0'>Seguimiento</h5>
                    </div>
                </NavLink>
                <NavLink to={`/negocios/socios/${folio}/personal`} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='m-0 mx-5'>Personal de la empresa</h5>
                    </div>
                </NavLink>
                <NavLink to={`/negocios/socios/${folio}/documentos`} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='m-0 mx-5'>Documentos</h5>
                    </div>
                </NavLink>
            </Container>
            <div style={{ width: '100%' }} className='py-3 px-5'>
                <Routes>
                    <Route path="/seguimiento" element={<Tracking partnerFolio={folio} />} />
                    <Route path="/documentos" element={<Documents />} />
                </Routes>
            </div>
        </>
    )
}

export default InfoPartner