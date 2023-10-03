import { Container } from 'react-bootstrap';
import LogisticSideBar from './SideBar';
import { Route, Routes } from 'react-router-dom';
import UpcomingEvents from './events/UpcomingEvents';
import CancelledEvents from './events/CancelledEvents';
import ViewEvent from './events/ViewEvent';
import NavBarCMS from '../NavBar';
import ClusterFooter from '../Footer';
import Providers from './providers/Providers';
import CreateEvent from './events/CreateEvent';

const Logistic = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBarCMS />
            <Container className='d-flex p-0' fluid style={{ flex: 1 }}>
                <LogisticSideBar />
                <Container className='m-0 p-0' fluid style={{ height: 'calc(100vh - 100px)', overflowY: 'auto' }}>
                    <Routes>
                        <Route path='/eventos/*' element={<UpcomingEvents />} />
                        <Route path='/crear-evento' element={<CreateEvent />} />
                        <Route exact path='/eventos/:id/*' element={<ViewEvent />} />
                        <Route path='/eventos-cancelados' element={<CancelledEvents />} />
                        <Route path='/proveedores/*' element={<Providers />} />
                    </Routes>
                </Container>
            </Container>
            <ClusterFooter />
        </div>
    )
}

export default Logistic