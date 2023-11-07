import { Container } from 'react-bootstrap';
import LogisticSideBar from './SideBar';
import { Route, Routes } from 'react-router-dom';
import UpcomingEvents from './events/upcomingEvents/UpcomingEvents';
import ViewEvent from './events/ViewEvent';
import NavBarCMS from '../NavBar';
import ClusterFooter from '../Footer';
import Providers from './providers/Providers';
import CreateEvent from './events/upcomingEvents/CreateEvent';
import ViewInventory from './inventory/ViewInventory';
import SponsorInterface from './sponsors/SponsorInterface';
import ShowSponsor from './sponsors/ShowSponsors';
import UpcomingAssistants from './assistants/UpcomingAssistants';
import ViewAssistants from './assistants/ViewAssistants';
import CanceledEvents from './events/canceledEvents/CanceledEvents';
import ConcludedEvents from './events/concludedEvents/ConcludedEvents';

const Logistic = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <NavBarCMS />
            <Container className='d-flex p-0' fluid style={{ height: '92vh' }}>
                <LogisticSideBar />
                <Container className='m-0 p-0' fluid style={{ overflowY: 'auto' }}>
                    <Routes>
                        <Route path='/eventos/*' element={<UpcomingEvents />} />
                        <Route path='/crear-evento' element={<CreateEvent />} />
                        <Route exact path='/eventos/:id/*' element={<ViewEvent />} />
                        <Route path='/eventos-cancelados' element={<CanceledEvents />} />
                        <Route path='/eventos-concluidos' element={<ConcludedEvents />} />
                        <Route path='/proveedores/*' element={<Providers />} />
                        <Route path='/inventario/*' element={<ViewInventory />} />
                        <Route path='/patrocinadores/*' element={<SponsorInterface />} />



                        <Route exact path='/patrocinadores/:id/*' element={<ShowSponsor />} />
                        <Route path='/personal-auxiliar/*' element={<UpcomingAssistants />} />
                        <Route exact path='/personal-auxiliar/:id/*' element={<ViewAssistants />} />
                    </Routes>
                </Container>
            </Container>
        </div>
    )
}

export default Logistic