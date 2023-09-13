
import { CDBBox, CDBIcon } from 'cdbreact'
import { Container } from 'react-bootstrap'
import { NavLink, Route, Routes } from 'react-router-dom'
import InterestedPerson from './viewEvent/InterestedPerson'
import Providers from './viewEvent/Providers'
import Assistant from './viewEvent/Assistant'
import Sponsor from './viewEvent/Sponsor'


const ViewEvent = () => {
    return (
        <>
            <Container fluid className='m-0 pt-4 ps-4 pe-4 p-3' style={{ backgroundColor: '#EFEFEF' }}>
                <CDBBox display='flex' flex='fill' alignItems='center'>
                    <CDBBox>
                        <img
                            src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                            width={100}
                            height={100}
                            style={{ borderRadius: '60px' }}
                            alt='Mina'
                        />
                    </CDBBox>

                    <Container>
                        <h3 className={'ms-5 fw-bold'} >Vista del evento 1</h3>
                        <h5 className='ms-5 fs-6' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                        <CDBBox style={{ fontSize: '13px' }} display='flex' flex='fill' alignItems='center'>
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon className='ms-5' far icon='calendar' />
                                Domingo 1 de enero del 2024 (XX días)
                            </CDBBox>
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon className='ms-5' far icon='clock' display='flex' flex='fill' />
                                00:00 p.m
                            </CDBBox>
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon className='ms-5' icon='map-marker-alt' display='flex' flex='fill' />
                                Hermosillo, Sonora
                            </CDBBox>
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon className='ms-5' icon='link' display='flex' flex='fill' />
                                https://meet.google.com
                            </CDBBox>
                        </CDBBox>
                    </Container>

                </CDBBox>
            </Container>
            <CDBBox display='flex' flex='fill' style={{ backgroundColor: '#D9D9D9' }} justifyContent='center' py={2}>
                <CDBBox>
                    <NavLink to={'/logistica/eventos/1/personas-interesadas'} className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                        <h5 className='m-0 mx-5' style={{ color: '#606060' }}>Personas Interesadas</h5>
                    </NavLink>
                </CDBBox>
                <CDBBox>
                    <NavLink to={'/logistica/eventos/1/proveedores'} className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                        <h5 className='m-0 mx-5' style={{ color: '#606060' }}>Proveedores</h5>
                    </NavLink>
                </CDBBox>
                <CDBBox>
                    <NavLink to={'/logistica/eventos/1/patrocinadores'} className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                        <h5 className='m-0 mx-5' style={{ color: '#606060' }}>Patrocinadores</h5>
                    </NavLink>
                </CDBBox>
                <CDBBox>
                    <NavLink to={'/logistica/eventos/1/staff'} className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                        <h5 className='m-0 mx-5' style={{ color: '#606060' }}>Staff</h5>
                    </NavLink>
                </CDBBox>
            </CDBBox>
            <Routes>
                <Route path='/personas-interesadas' element={<InterestedPerson />} />
                <Route path='/proveedores' element={<Providers />} />
                <Route path='/patrocinadores' element={<Sponsor />} />
                <Route path='/staff' element={<Assistant />} />
            </Routes>
        </>
    )
}

export default ViewEvent