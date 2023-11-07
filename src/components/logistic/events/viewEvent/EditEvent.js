import { CDBBox, CDBIcon } from "cdbreact"
import { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Form, Modal, Row, Stack } from "react-bootstrap"
import { ApiUrls } from "../../../../tools/ApiUrls"
import Swal from "sweetalert2"
import axios from "axios"
import toast from "react-hot-toast"
import ToastManager from "../../../../tools/ToastManager"

const EditEvent = ({ show, handleClose, event, handleUpdateEvent }) => {

    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [place, setPlace] = useState('')
    const [link, setLink] = useState('')
    const [eventType, setEventType] = useState('Presencial')

    const handleEventTypeChange = (event) => {
        setEventType(event.target.value)
    }

    useEffect(() => {
        setEventName(event.event_name)
        setDescription(event.description)
        setDate(event.date)
        setHour(event.hour)
        setPlace(event.place)
        setLink(event.link)
        setEventType(event.type)
    }, [event])

    const urls = useContext(ApiUrls)

    const confirmEditEvent = () => {
        Swal.fire({
            title: 'Advertencia',
            text: `¿Estás seguro de modificar el evento ${event.event_name}?`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No',
            showConfirmButton: true,
            confirmButtonText: 'Modificar',
            reverseButtons: true,
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                modifyEvent()
            }
        })
    }

    const modifyEvent = async () => {
        const res = await axios.put(urls.updateEvent + event.id, {
            event_name: eventName,
            description: description,
            type: eventType,
            place: place,
            link: link,
            date: date,
            hour: hour,
        })
        if (res.data === true) {
            toast.custom((t) => (<ToastManager title={'Exito'} text={'Evento modificado correctamente'} type={'success'} />))
            handleUpdateEvent()
            handleClose()
        }
    }

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title><CDBIcon icon="pen" className="me-2" />Modificar evento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Container className="d-flex align-items-center" fluid>
                        <Stack gap={3} className="col-md-3">
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={150}
                                height={150}
                                style={{ borderRadius: '200px' }}
                                alt='Mina'
                                className='mx-auto'
                            />
                            <Button variant="outline-secondary" className="rounded-5">Cambiar foto</Button>
                        </Stack>
                        <Container className="ms-5">
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre del evento</Form.Label>
                                <Form.Control value={eventName} onChange={(e) => setEventName(e.target.value)} type="text" placeholder="Introduzca el nombre del evento" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Descripción del evento</Form.Label>
                                <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" placeholder="Introduce la descripción del evento" rows={4} />
                            </Form.Group>
                        </Container>
                    </Container>
                    <hr className="mx-3" />
                    <Container className="px-3">
                        <Container className="d-flex align-items-center p-0 mb-4" fluid>
                            <CDBIcon icon="info-circle" size="lg" />
                            <h3 className="m-0 ms-2 fw-bold" style={{ textDecoration: 'underline' }}>Información del evento</h3>
                        </Container>
                        <Container fluid>
                            <Container className="d-flex align-items-center m-0 p-0">
                                <CDBIcon icon="calendar-day" />
                                <h5 className="m-0 ms-2">Horario del evento</h5>
                            </Container>
                            <CDBBox display="flex" flex="fill" className="mx-2 mt-3 mb-4">
                                <Form.Group as={Row} className="me-3">
                                    <Form.Label column md='2' className="me-2">Dia</Form.Label>
                                    <Col>
                                        <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column md='2' className="me-2">Hora</Form.Label>
                                    <Col>
                                        <Form.Control type="time" value={hour} onChange={(e) => setHour(e.target.value)} />
                                    </Col>
                                </Form.Group>
                            </CDBBox>

                            <Container className={'d-flex align-items-center m-0 p-0 mt-4'}>
                                <CDBIcon icon="tv" />
                                <h5 className="m-0 ms-2">Tipo de evento</h5>
                            </Container>
                            <Stack direction="horizontal" className="mx-2 mt-3 mb-4" gap={5}>
                                <Form.Check inline label='Presencial' type="radio" name="eventType" value="Presencial" checked={eventType === 'Presencial'} onChange={handleEventTypeChange} />
                                <Form.Check inline label='Virtual' type="radio" name="eventType" value="Virtual" checked={eventType === 'Virtual'} onChange={handleEventTypeChange} />
                            </Stack>
                            {eventType === 'Presencial' ?
                                (<>
                                    <Container className="d-flex align-items-center m-0 p-0">
                                        <CDBIcon icon="map" />
                                        <h5 className="m-0 ms-2">Lugar del evento</h5>
                                    </Container>
                                    <Form.Control className="ms-2 me-5 mt-3 mb-4" type="text" placeholder="Introduce el lugar donde se desarrollará el evento" value={place} onChange={(e) => setPlace(e.target.value)} />
                                </>)
                                : (<>
                                    <Container className="d-flex align-items-center m-0 p-0">
                                        <CDBIcon icon="link" />
                                        <h5 className="m-0 ms-2">Link de la reunión</h5>
                                    </Container>
                                    <Form.Control type="text" className="ms-2 mt-3 mb-4" placeholder="Introduce el link donde se desarrollará el evento" value={link} onChange={(e) => setLink(e.target.value)} />
                                </>)
                            }
                        </Container>
                    </Container>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Regresar</Button>
                <Button variant="primary" onClick={confirmEditEvent}>Modificar evento</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default EditEvent