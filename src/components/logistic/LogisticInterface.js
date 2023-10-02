import { Container } from 'react-bootstrap';
import LogisticSideBar from './SideBar';
import { Route, Routes } from 'react-router-dom';
import UpcomingEvents from './events/UpcomingEvents';
import CancelledEvents from './events/CancelledEvents';
import ViewEvent from './events/ViewEvent';
import NavBarCMS from '../NavBar';
import ClusterFooter from '../Footer';
import SponsorList from './sponsors/SponsorList';
import ViewSponsor from './sponsors/ViewSponsor';

const Logistic = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBarCMS />
            <Container className='d-flex p-0' fluid style={{ flex: 1 }}>
                <LogisticSideBar />
                <Container className='m-0 p-0' fluid style={{ height: 'calc(100vh - 100px)', overflowY: 'auto' }}>
                    <Routes>
                        <Route path='/eventos/*' element={<UpcomingEvents />} />
                        <Route exact path='/eventos/:id/*' element={<ViewEvent />} />
                        <Route path='/eventos-cancelados' element={<CancelledEvents />} />
                        <Route path='/patrocinadores/*' element={<SponsorList />} />
                        <Route exact path='/patrocinadores/:id/*' element={<ViewSponsor />} />

                    </Routes>
                </Container>
            </Container>
            <ClusterFooter />
        </div>
    )
}

export default Logistic