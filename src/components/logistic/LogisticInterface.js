import { Container, Navbar } from 'react-bootstrap';
import LogisticSideBar from './SideBar';
import { Route, Routes } from 'react-router-dom';
import UpcomingEvents from './events/UpcomingEvents';
import CancelledEvents from './events/CancelledEvents';
import { CDBBox } from 'cdbreact';
import ViewEvent from './events/ViewEvent';

const Logistic = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        Cluster Minero de Sonora
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <CDBBox display='flex' flex='fill'>
                <LogisticSideBar />
                <Container className='m-0 p-0'>
                    <Routes>
                        <Route path='/eventos/*' element={<UpcomingEvents />} />
                        <Route exact path='/eventos/:id/*' element={<ViewEvent />} />
                        <Route path='/eventos_cancelados' element={<CancelledEvents />} />
                    </Routes>
                </Container>
            </CDBBox>
            <Container style={{ textAlign: 'center', backgroundColor: '#464646', color: 'white' }} fluid>
                Copyright © 2023 Cluster Minero de Sonora
            </Container>
        </>
    )
}

export default Logistic