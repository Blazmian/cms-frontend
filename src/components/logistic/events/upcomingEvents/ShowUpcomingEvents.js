import { CDBBox } from "cdbreact"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { convertDateNoRestingDays } from "../../../../tools/Methods"

const ShowUpcomingEvents = ({ events, handleUpdateEvents }) => {

    const navigate = useNavigate('')

    return (
        <Container fluid>
            {events.map((event) => (
                <CDBBox className="list-result" onClick={() => navigate(event.id + '/personas-interesadas')} key={event.id} display='flex' flex='fill' p={2} my={2}>
                    <CDBBox display='flex' flex='fill' alignItems='center' >
                        <img
                            src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                            width={50}
                            height={50}
                            style={{ borderRadius: '60px' }}
                            alt='Logo Evento'
                        />
                        <Container className='ms-2'>
                            <h6>{event.event_name}</h6>
                            <p className='m-0'>{event.partner.comercial_name}</p>
                        </Container>
                    </CDBBox>
                    <CDBBox display='flex' className='me-2'>
                        {convertDateNoRestingDays(event.date)}
                    </CDBBox>
                </CDBBox>
            ))
            }
        </Container>
    )
}

export default ShowUpcomingEvents