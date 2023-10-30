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
import SponsorList from './sponsors/SponsorList';
import ViewSponsor from './sponsors/ViewSponsor';
import ViewAssistants from './assistants/ViewAssistants';
import UpcomingProviders from './providers/UpcomingProviders';
import ViewProvider from './providers/ViewProvider';
import ViewObjectInventory from './inventory/ViewObjectInventory';
import AssistantsInterface from './assistants/AssistantsInterface';
import PartnersInterface from './partners/PartnersInterface';
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
                        <Route path='/inventario/:id/' element={<ViewObjectInventory />} />
                        <Route path='/patrocinadores/*' element={<SponsorList />} />


                        <Route path='/socios/' element={<PartnersInterface />} />


                        <Route exact path='/patrocinadores/:id/*' element={<ViewSponsor />} />
                        <Route path='/personal-auxiliar/*' element={<AssistantsInterface />} />
                        <Route exact path='/personal-auxiliar/:id/' element={<ViewAssistants />} />
                        <Route path='/proveedores/*' element={<UpcomingProviders/>} />
                        <Route exact path='/proveedores/:id/*' element={<ViewProvider/>} />
                        <Route path='/socios/' element={<PartnersInterface />} />
                    </Routes>
                </Container>
            </Container>
        </div>
    )
}

export default Logistic