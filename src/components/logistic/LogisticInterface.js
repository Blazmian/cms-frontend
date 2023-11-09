import { Container } from 'react-bootstrap';
import LogisticSideBar from './SideBar';
import { Route, Routes } from 'react-router-dom';
import UpcomingEvents from './events/upcomingEvents/UpcomingEvents';
import ViewEvent from './events/ViewEvent';
import NavBarCMS from '../NavBar';
import ClusterFooter from '../Footer';
import Providers from './providers/Providers';
import CreateEvent from './events/upcomingEvents/CreateEvent';
import ViewAssistants from './assistants/ViewAssistants';
import SponsorInterface from './sponsors/SponsorInterface';
import UpcomingProviders from './providers/UpcomingProviders';
import ViewProvider from './providers/ViewProvider';
import ViewObjectInventory from './inventory/ViewObjectInventory';
import AssistantsInterface from './assistants/AssistantsInterface';
import CanceledEvents from './events/canceledEvents/CanceledEvents';
import ConcludedEvents from './events/concludedEvents/ConcludedEvents';
import CreateProvider from './providers/CreateProvider';
import EditProvider from './providers/EditProviders';
import InventoryInterface from './inventory/InventoryInterface';

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
                        <Route exact path='/proveedores/:id/' element={<ViewProvider />} />
                        <Route exact path='/editar-proveedor/:id/' element={<EditProvider />} />

                        <Route path='/inventario/*' element={<InventoryInterface />} />
                        <Route path='/inventario/:id/' element={<ViewObjectInventory />} />
                        <Route path='/patrocinadores/*' element={<SponsorInterface />} />
                        <Route exact path='/crear-proveedor/' element={<CreateProvider />} />

                        
                        <Route path='/personal-auxiliar/*' element={<AssistantsInterface />} />
                        <Route exact path='/personal-auxiliar/:id/' element={<ViewAssistants />} />
                        <Route path='/proveedores/*' element={<UpcomingProviders/>} />
                        <Route exact path='/proveedores/:id/*' element={<ViewProvider/>} />
                    </Routes>
                </Container>
            </Container>
        </div>
    )
}

export default Logistic