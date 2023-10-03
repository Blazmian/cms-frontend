import { CDBBox, CDBIcon } from 'cdbreact'
import { Button, Container, Stack } from 'react-bootstrap'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import InterestedPerson from './viewEvent/InterestedPerson'
import Providers from './viewEvent/Providers'
import Assistant from './viewEvent/Assistant'
import Sponsor from './viewEvent/Sponsor'
import '../../../styles/ViewEvent.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ApiUrls } from '../../../tools/ApiUrls'
import { convertDate, convertHour } from '../../../tools/Methods'

const ViewEvent = () => {

    const { id } = useParams()
    const [eventInformation, setEventInformation] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getEventInfo()
    }, [id])

    const getEventInfo = async () => {
        const res = await axios.get(urls.getOneEvent + id)
        setEventInformation(res.data)
    }

    return (
        <>
            <Container fluid className='m-0 pt-4 px-4 pb-3 d-flex align-items-center' style={{ backgroundColor: '#EFEFEF' }}>
                <img
                    src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                    width={100}
                    height={100}
                    style={{ borderRadius: '60px' }}
                    alt='Mina'
                    className='mx-5'
                />
                <Container fluid>
                    <h3 className={'fw-bold'}>{eventInformation.event_name}</h3>
                    <h5 className='fs-6' style={{ textAlign: 'justify' }}>{eventInformation.description}</h5>
                    <CDBBox style={{ fontSize: '13px' }} display='flex' flex='fill' alignItems='center'>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon far icon='calendar' />
                            {convertDate(eventInformation.date)}
                        </CDBBox>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon far icon='clock' />
                            {eventInformation && eventInformation.hour && convertHour(eventInformation.hour)}
                        </CDBBox>
                        {eventInformation && eventInformation.type === 'Presencial' ?
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon icon='map-marker-alt' />
                                {eventInformation.place}
                            </CDBBox>
                            :
                            <></>
                        }
                        {eventInformation && eventInformation.type === 'Virtual' ?
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon icon='link' />
                                {eventInformation.link}
                            </CDBBox>
                            :
                            <></>
                        }
                    </CDBBox>
                </Container>
            </Container>
            <Container className='d-flex justify-content-center py-2' fluid style={{ backgroundColor: '#D9D9D9' }}>
                <NavLink to={`/logistica/eventos/${id}/personas-interesadas`} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='m-0 mx-5'>Personas Interesadas</h5>
                    </div>
                </NavLink>
                <NavLink to={`/logistica/eventos/${id}/proveedores`} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='m-0 mx-5'>Proveedores</h5>
                    </div>
                </NavLink>
                <NavLink to={`/logistica/eventos/${id}/patrocinadores`} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='m-0 mx-5'>Patrocinadores</h5>
                    </div>
                </NavLink>
                <NavLink to={`/logistica/eventos/${id}/staff`} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='m-0 mx-5'>Staff</h5>
                    </div>

                </NavLink>
            </Container>
            <div style={{ width: '100%', height: '52vh' }} className='pt-3 px-5'>
                <Routes>
                    <Route path='/personas-interesadas' element={<InterestedPerson />} />
                    <Route path='/proveedores' element={<Providers />} />
                    <Route path='/patrocinadores' element={<Sponsor />} />
                    <Route path='/staff' element={<Assistant />} />
                </Routes>
            </div>
            <Stack direction='horizontal' gap={3} className='mx-5 mt-5 mb-3'>
                <Button variant='secondary' size='lg'>
                    <CDBIcon icon='angle-left' className='me-3' />
                    Regresar
                </Button>
                <Button className='ms-auto' variant='outline-danger' size='lg'>
                    <CDBIcon icon='calendar-minus' className='me-3' />
                    Cancelar
                </Button>
                <Button variant='primary' size='lg'>
                    <CDBIcon icon='pen' className='me-3' />
                    Editar
                </Button>
            </Stack>
        </>
    )
}

export default ViewEvent