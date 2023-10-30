import { CDBBox } from "cdbreact"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import '../../../styles/UpcomingEvent.css'

const ShowUpcomingEvents = ({ events, handleUpdateEvents }) => {
    return (
        <Container fluid>
            {events.map((event) => (
                <CDBBox key={event.id} display='flex' flex='fill' style={{ backgroundColor: '#EEEEEE', borderRadius: '15px' }} p={2} my={2}>
                    <CDBBox display='flex' flex='fill' alignItems='center' >
                        <img
                            src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                            width={50}
                            height={50}
                            style={{ borderRadius: '60px' }}
                            alt='Logo Evento'
                        />
                        <Container className='ms-2'>
                            <NavLink to={`/logistica/eventos/${event.id}/personas-interesadas`} style={{ textDecoration: 'none' }} className='hoverEvent'>
                                <h6>{event.event_name}</h6>
                            </NavLink>
                            <p className='m-0'>{event.partner.comercial_name}</p>
                        </Container>
                    </CDBBox>
                    <CDBBox display='flex' className='me-2'>
                        {event.date}
                    </CDBBox>
                </CDBBox>
            ))
            }
        </Container >
    )
}

export default ShowUpcomingEvents