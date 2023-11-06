import { CDBIcon } from 'cdbreact'
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
import TimeRemaining from './viewEvent/TimeRemaining'
import EventShowcase from './viewEvent/EventShowcase'
import toast from 'react-hot-toast'
import ToastManager from '../../../tools/ToastManager'
import CancelEvent from './viewEvent/CancelEvent'
import EditEvent from './viewEvent/EditEvent'

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

    const copyRegistrationLink = () => {
        navigator.clipboard.writeText(urls.getFrontendHost + `registro-evento/${eventInformation.id}`)
        toast.custom(() => (<ToastManager title={'Listo'} text={'¡Enlace copiado correctamente!'} type={'primary'} />))
    }

    const [showCancel, setShowCancel] = useState(false)
    const handleShowCancel = () => setShowCancel(true)
    const handleCloseCancel = () => setShowCancel(false)

    const [showEdit, setShowEdit] = useState(false)
    const handleShowEdit = () => setShowEdit(true)
    const handleCloseEdit = () => setShowEdit(false)

    return (
        <>
            <CancelEvent show={showCancel} handleClose={handleCloseCancel} event={eventInformation} />
            <EditEvent show={showEdit} handleClose={handleCloseEdit} event={eventInformation} handleUpdateEvent={getEventInfo} />
            <TimeRemaining event={eventInformation} />

            <EventShowcase event={eventInformation} />

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
            <div style={{ width: '100%', height: '55vh' }} className='pt-3 px-5'>
                <Routes>
                    <Route path='/personas-interesadas' element={<InterestedPerson eventId={id} />} />
                    <Route path='/proveedores' element={<Providers />} />
                    <Route path='/patrocinadores' element={<Sponsor eventId={id} />} />
                    <Route path='/staff' element={<Assistant eventId={id} />} />
                </Routes>
            </div>
            <Stack direction='horizontal' gap={3} className='mx-5 mb-3'>
                <Button className='me-auto' variant='outline-danger' size='lg' onClick={handleShowCancel}>
                    <CDBIcon far icon='calendar-minus' className='me-3' />
                    Cancelar evento
                </Button>
                <Button variant='secondary' size='lg' onClick={copyRegistrationLink}>
                    <CDBIcon far icon='clipboard' className='me-3' />
                    Copiar link de registro
                </Button>
                <Button variant='primary' size='lg' onClick={handleShowEdit}>
                    <CDBIcon far icon='edit' className='me-3' />
                    Modificar
                </Button>
            </Stack>
        </>
    )
}

export default ViewEvent