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
import ViewInventory from './inventory/ViewInventory';
import SponsorInterface from './sponsors/SponsorInterface';
import ShowSponsor from './sponsors/ShowSponsors';
import UpcomingAssistants from './assistants/UpcomingAssistants';
import ViewAssistants from './assistants/ViewAssistants';
import PartnersInterface from './partners/PartnersInterface';

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
                        <Route path='/inventario/*' element={<ViewInventory />} />
                        <Route path='/patrocinadores/*' element={<SponsorInterface />} />


                        <Route path='/socios/' element={<PartnersInterface />} />


                        <Route exact path='/patrocinadores/:id/*' element={<ShowSponsor />} />
                        <Route path='/personal-auxiliar/*' element={<UpcomingAssistants />} />
                        <Route exact path='/personal-auxiliar/:id/*' element={<ViewAssistants />} />
                    </Routes>
                </Container>
            </Container>
            <ClusterFooter />
        </div>
    )
}

export default Logistic