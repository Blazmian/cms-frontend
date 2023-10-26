import { CDBBox, CDBIcon } from "cdbreact"
import { Button, Container, Modal, Stack } from "react-bootstrap"
import { convertDate, convertHour, getRelativeTime } from "../../../../tools/Methods"

const ShowReason = ({ show, handleClose, canceledEvent }) => {

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header className="p-4" style={{ backgroundColor: '#494949', color: '#eeeeee' }}>
                <Container className='d-flex align-items-center p-0'>
                    <img
                        src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                        width={100}
                        height={100}
                        style={{ borderRadius: '60px' }}
                        alt='Mina'
                        className='me-3'
                    />
                    <Container fluid>
                        <h3 className='fw-bold'>{canceledEvent && canceledEvent.event && canceledEvent.event.event_name}</h3>
                        <h5 className='fs-6' style={{ textAlign: 'justify' }}>{canceledEvent && canceledEvent.event && canceledEvent.event.description}</h5>
                        <CDBBox style={{ fontSize: '13px' }} display='flex' flex='fill' alignItems='center'>
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon far icon='calendar' />
                                {convertDate(canceledEvent && canceledEvent.event && canceledEvent.event.date)}
                            </CDBBox>
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon far icon='clock' />
                                {canceledEvent && canceledEvent.event && canceledEvent.event.hour && convertHour(canceledEvent.event.hour)}
                            </CDBBox>
                            {canceledEvent && canceledEvent.event && canceledEvent.event.type === 'Presencial' ?
                                <CDBBox display='flex' flex='fill' alignItems='center'>
                                    <CDBIcon icon='map-marker-alt' />
                                    {canceledEvent.event.place}
                                </CDBBox>
                                :
                                <></>
                            }
                            {canceledEvent && canceledEvent.event && canceledEvent.event.type === 'Virtual' ?
                                <CDBBox display='flex' flex='fill' alignItems='center'>
                                    <CDBIcon icon='link' />
                                    {canceledEvent.event.link}
                                </CDBBox>
                                :
                                <></>
                            }
                        </CDBBox>
                    </Container>
                </Container>
            </Modal.Header>
            <Modal.Body className="px-4">
                <h4>Razón de cancelación:</h4>
                <p className="mx-2">{canceledEvent && canceledEvent.reason}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary">
                    Ver detalles del evento
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ShowReason