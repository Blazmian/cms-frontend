import { CDBIcon } from "cdbreact"
import { useContext, useState } from "react"
import { Button, Container, Form, Stack, Row, Col } from "react-bootstrap"
import axios, { } from 'axios'
import { useNavigate } from "react-router-dom"
import { ApiUrls } from "../../../../tools/ApiUrls"
import SearchPartner from "./SearchPartner"
import Swal from "sweetalert2"

const CreateEvent = () => {

    const [eventType, setEventType] = useState('presential')
    const navigate = useNavigate('')

    const handleEventTypeChange = (event) => {
        setEventType(event.target.value)
    }

    const urls = useContext(ApiUrls)

    const [partner, setPartner] = useState({})
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [hour, setHour] = useState('00:00')
    const [place, setPlace] = useState('')
    const [link, setLink] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createEvent()
    }

    const createEvent = async () => {
        var type;
        if (eventType === 'presential') {
            type = 'Presencial'
        } else {
            type = 'Virtual'
        }
        const res = await axios.post(urls.createEvent + partner.folio,
            {
                event_name: eventName,
                description: description,
                type: type,
                place: place,
                link: link,
                date: date,
                hour: hour,
            }
        )
        Swal.fire({
            icon: 'success',
            title: '¡Evento creado con exito!',
            text: '',
        }).then(response => {
            navigate('/logistica/eventos')
        })
    }

    return (
        <>
            <SearchPartner setPartner={setPartner} show={show} handleClose={handleClose} />
            <Container fluid className="p-3">
                <Container className="d-flex align-items-center" fluid>
                    <Button variant="dark" style={{ borderRadius: '30px', height: '50px', width: '50px' }} onClick={() => navigate('/logistica/eventos')}>
                        <CDBIcon icon="angle-left" size="2x" />
                    </Button>
                    <h2 className="m-0 ms-3 fw-bold">Crear Evento</h2>
                </Container>
                <hr className="mx-3" />
                <Form>
                    <Container className="d-flex align-items-center" fluid>
                        <Stack gap={3} className="col-md-2">
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={150}
                                height={150}
                                style={{ borderRadius: '100px' }}
                                alt='Logo Evento'
                                className="mx-auto"
                            />
                            <Button variant="outline-secondary" style={{ borderRadius: '20px' }}>Seleccionar Foto</Button>
                        </Stack>
                        <Container className="mx-5">
                            <Form.Group as={Row}>
                                <Form.Label column sm='2'>Nombre del evento</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Introduce el nombre del evento" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mt-3">
                                <Form.Label column sm='2'>Descripción del evento</Form.Label>
                                <Col>
                                    <Form.Control as="textarea" rows={4} placeholder="Introduce la descripción del evento" value={description} onChange={(e) => setDescription(e.target.value)} />
                                </Col>
                            </Form.Group>
                        </Container>
                    </Container>
                    <hr className="mx-3 my-4" />
                    <Container className="d-flex align-items-center p-0 mx-3 mb-4" fluid>
                        <CDBIcon icon="info-circle" size="lg" />
                        <h3 className="m-0 ms-2 fw-bold" style={{ textDecoration: 'underline' }}>Información del evento</h3>
                    </Container>
                    <Container fluid className="mx-3">
                        <Container className="d-flex align-items-center m-0 p-0">
                            <CDBIcon icon="calendar-day" />
                            <h5 className="m-0 ms-2">Horario del evento</h5>
                        </Container>
                        <Row className="mx-2 mt-3 mb-4">
                            <Col>
                                <Form.Group as={Row} >
                                    <Form.Label column sm='1'>Dia</Form.Label>
                                    <Col sm='auto'>
                                        <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Row}>
                                    <Form.Label column sm='1'>Hora</Form.Label>
                                    <Col sm='auto'>
                                        <Form.Control type="time" value={hour} onChange={(e) => setHour(e.target.value)} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Container className="d-flex align-items-center m-0 p-0">
                            <CDBIcon icon="user-tie" />
                            <h5 className="m-0 ms-2">Empresa solicitante</h5>
                        </Container>
                        <Stack direction="horizontal" gap={3} className={'mx-2 mt-3'}>
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={50}
                                height={50}
                                style={{ borderRadius: '60px' }}
                                alt='Logo Empresa' />
                            <Stack gap={1} className="me-auto justify-content-center">
                                <h6 className="m-0 fw-medium">{Object.keys(partner).length !== 0 ? partner.comercial_name : 'Nombre de la empresa'}</h6>
                                <h6 className="m-0 fw-normal">{Object.keys(partner).length !== 0 ? partner.folio : 'Nombre de la empresa'}</h6>
                            </Stack>
                            <Button variant="outline-primary" onClick={handleShow}>
                                <CDBIcon icon="search" className="me-2" />
                                Buscar
                            </Button>
                        </Stack>
                        <Container className={'d-flex align-items-center m-0 p-0 mt-4'}>
                            <CDBIcon icon="tv" />
                            <h5 className="m-0 ms-2">Tipo de evento</h5>
                        </Container>
                        <Stack direction="horizontal" className="mx-2 mt-3 mb-4" gap={5}>
                            <Form.Check inline label='Presencial' type="radio" name="eventType" value="presential" checked={eventType === 'presential'} onChange={handleEventTypeChange} />
                            <Form.Check inline label='Virtual' type="radio" name="eventType" value="virtual" checked={eventType === 'virtual'} onChange={handleEventTypeChange} />
                        </Stack>
                        {eventType === 'presential' ?
                            (<>
                                <Container className="d-flex align-items-center m-0 p-0">
                                    <CDBIcon icon="map" />
                                    <h5 className="m-0 ms-2">Lugar del evento (Opcional)</h5>
                                </Container>
                                <Stack gap={5} className="mx-2 mt-3 mb-4">
                                    <Form.Control type="text" placeholder="Introduce el lugar donde se desarrollará el evento" value={place} onChange={(e) => setPlace(e.target.value)} />
                                </Stack>
                            </>)
                            : (<>
                                <Container className="d-flex align-items-center m-0 p-0">
                                    <CDBIcon icon="link" />
                                    <h5 className="m-0 ms-2">Link de la reunión (Opcional)</h5>
                                </Container>
                                <Form.Control type="text" className="mx-2 mt-3 mb-4" placeholder="Introduce el link donde se desarrollará el evento" value={link} onChange={(e) => setLink(e.target.value)} />
                            </>)
                        }
                    </Container>
                    <hr className="mx-3 my-4" />
                    <Container className="d-flex align-items-center p-0 mx-3 mb-4" fluid>
                        <CDBIcon icon="gift" size="lg" />
                        <h3 className="m-0 ms-2 fw-bold" style={{ textDecoration: 'underline' }}>Patrocinadores (Opcional)</h3>
                    </Container>
                    <Container fluid className="mx-3">

                    </Container>
                    <hr className="mx-3 my-4" />
                    <Container className="d-flex align-items-center p-0 mx-3 mb-4" fluid>
                        <CDBIcon icon="users" size="lg" />
                        <h3 className="m-0 ms-2 fw-bold" style={{ textDecoration: 'underline' }}>Staff (Opcional)</h3>
                    </Container>
                    <Container fluid className="mx-3">

                    </Container>
                    <hr className="mx-3 my-4" />
                    <Container className="d-flex align-items-center p-0 mx-3 mb-4" fluid>
                        <CDBIcon icon="people-arrows" size="lg" />
                        <h3 className="m-0 ms-2 fw-bold" style={{ textDecoration: 'underline' }}>Proveedores (Opcional)</h3>
                    </Container>
                    <Container fluid className="mx-3">

                    </Container>
                    <hr className="mx-3 my-4" />
                    <Container fluid className="d-flex justify-content-end align-items-center mb-4">
                        <Button size="lg" type="submit" onClick={handleSubmit}>Crear evento</Button>
                    </Container>
                </Form>
            </Container>
        </>
    )

}

export default CreateEvent