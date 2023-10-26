import { CDBBox } from "cdbreact"
import { useState } from "react"
import { Container } from "react-bootstrap"
import ShowReason from "./ShowReason"
import { getRelativeTime } from "../../../../tools/Methods"

const ShowCanceledEvents = ({ events, handleUpdateEvents }) => {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const [event, setEvent] = useState()
    const handleEvents = (event) => {
        setEvent(event)
        handleShow()
    }

    return (
        <>
            <ShowReason show={show} handleClose={handleClose} canceledEvent={event} />
            <Container fluid>
                {events.map((event) => (
                    <CDBBox className="list-result" onClick={() => handleEvents(event)} key={event.id} display='flex' flex='fill' p={2} my={2}>
                        <CDBBox display='flex' flex='fill' alignItems='center' >
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={50}
                                height={50}
                                style={{ borderRadius: '60px' }}
                                alt='Logo Evento'
                            />
                            <Container className='ms-2'>
                                <h6>{event.event.event_name}</h6>
                                <p className='m-0'>{event.event.partner.comercial_name}</p>
                            </Container>
                        </CDBBox>
                        <CDBBox display='flex' className='me-2'>
                            {getRelativeTime(event.canceled_day)}
                        </CDBBox>
                    </CDBBox>
                ))
                }
            </Container>
        </>
    )
}

export default ShowCanceledEvents