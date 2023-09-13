import { Container, Navbar } from 'react-bootstrap';
import LogisticSideBar from './SideBar';
import { Route, Routes } from 'react-router-dom';
import NextEvent from './events/NextEvents';
import CancelledEvents from './events/CancelledEvents';

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
            <LogisticSideBar />
            <Routes>
                <Route path='/eventos' element={<NextEvent />} />
                <Route path='/eventos_cancelados' element={<CancelledEvents />} />
            </Routes>
            <Container style={{ textAlign: 'center', bg:'dark', variant:'dark'}}>
                Copyright © 2023 Cluster Minero de Sonora
            </Container>
        </>
    )
}

export default Logistic