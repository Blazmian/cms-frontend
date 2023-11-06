import { CDBBox, CDBIcon } from "cdbreact"
import { Button, Col, Container, Form, Offcanvas, Row } from "react-bootstrap"
import NavBarCMS from "../../NavBar"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ApiUrls } from "../../../tools/ApiUrls"
import { convertDate, convertHour } from "../../../tools/Methods"
import EventInfoCanva from "./EventInfoCanva"

const RegisterEvent = () => {

    const { id } = useParams()
    const urls = useContext(ApiUrls)
    const [eventInfo, setEventInfo] = useState([])

    useEffect(() => {
        getEventInfo()
    }, [id])

    const getEventInfo = async () => {
        const res = await axios.get(urls.getOneEvent + id)
        setEventInfo(res.data)
    }

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <NavBarCMS />
                <Container style={{ flex: 1 }} className="d-flex px-5 py-3" fluid>
                    {eventInfo.found ? (
                        <Container>
                            <div className="d-flex align-items-center">
                                <h2 className="fw-bold mb-0 me-auto">Registro a Evento</h2>
                                <Button variant="outline-dark" onClick={handleShow}>
                                    <CDBIcon icon="info-circle" className="me-2" />
                                    Información del evento
                                </Button>
                            </div>
                            <hr />
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="names">
                                    <Form.Label column sm={2}>Nombres</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Introduce tus nombres y apellidos" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="company">
                                    <Form.Label column sm={2}>Empresa</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Introduce el nombre de la empresa a la que pertenece" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="position">
                                    <Form.Label column sm={2}>Puesto</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Introduce el puesto que ejerce" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="email">
                                    <Form.Label column sm={2}>Correo</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="email" placeholder="Introduce tu correo electrónico" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="email">
                                    <Form.Label column sm={2}>Teléfono</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Introduce tu número celular o teléfono" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3 d-flex align-items-sm-center" controlId="sex">
                                    <Form.Label column sm={2}>Sexo</Form.Label>
                                    <Col sm={10}>
                                        <Form.Check inline name='sex' type={'radio'} id={'men'} label={'Masculino'} />
                                        <Form.Check inline name='sex' type={'radio'} id={'woman'} label={'Femenino'} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3 d-flex align-items-sm-center" controlId="eventfind">
                                    <Form.Label column sm={2}>¿Cómo te enteraste del evento?</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Introduce tu número celular o teléfono" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="eventfind">
                                    <Form.Label column sm={2}>Expectativas</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control as="textarea" rows={3} placeholder="Describe las expectativas que tiene sobre el evento." />
                                    </Col>
                                </Form.Group>
                                <Container className="d-flex justify-content-center">
                                    <Button>Registrarse</Button>
                                </Container>
                            </Form>
                        </Container>
                    ) : (
                        <div className="d-flex align-items-center" style={{ flex: 1, width: '100%', color: '#dc3545' }}>
                            <Container className="text-center">
                                <CDBIcon size="5x" icon="exclamation-triangle" className="mb-5" />
                                <h1>Evento no encontrado</h1>
                            </Container>
                        </div>
                    )}
                </Container>
            </div >

            <EventInfoCanva show={show} handleClose={handleClose} eventInfo={eventInfo.event} />
        </>
    )
}

export default RegisterEvent