import { CDBBox, CDBIcon } from 'cdbreact'
import { Button, Container, Stack } from 'react-bootstrap'
import { NavLink, Route, Routes } from 'react-router-dom'
import InterestedPerson from './viewEvent/InterestedPerson'
import Providers from './viewEvent/Providers'
import Assistant from './viewEvent/Assistant'
import Sponsor from './viewEvent/Sponsor'
import '../../../styles/ViewEvent.css'

const ViewEvent = () => {
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
                    <h3 className={'fw-bold'}>Vista del evento 1</h3>
                    <h5 className='fs-6' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                    <CDBBox style={{ fontSize: '13px' }} display='flex' flex='fill' alignItems='center'>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon far icon='calendar' />
                            Domingo 1 de enero del 2024 (XX días)
                        </CDBBox>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon far icon='clock' />
                            00:00 p.m
                        </CDBBox>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon icon='map-marker-alt' />
                            Hermosillo, Sonora
                        </CDBBox>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon icon='link' />
                            https://meet.google.com
                        </CDBBox>
                    </CDBBox>
                </Container>
            </Container>
            <Container className='d-flex justify-content-center py-2' fluid style={{ backgroundColor: '#D9D9D9' }}>
                <NavLink to={'/logistica/eventos/1/personas-interesadas'} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='m-0 mx-5'>Personas Interesadas</h5>
                    </div>
                </NavLink>
                <NavLink to={'/logistica/eventos/1/proveedores'} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='m-0 mx-5'>Proveedores</h5>
                    </div>
                </NavLink>
                <NavLink to={'/logistica/eventos/1/patrocinadores'} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
                    <div className='p-1'>
                        <h5 className='m-0 mx-5'>Patrocinadores</h5>
                    </div>
                </NavLink>
                <NavLink to={'/logistica/eventos/1/staff'} style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-clicked' : "nav-link-disabled"}>
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