import { CDBBox, CDBIcon } from "cdbreact"
import ClusterFooter from "./Footer"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import NavBarCMS from "./NavBar"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ApiUrls } from "../tools/ApiUrls"
import { convertDate, convertHour } from "../tools/Methods"

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

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <NavBarCMS />
                <Container style={{ flex: 1 }} className="d-flex p-3" fluid>
                    <Container>
                        <h2>Registro a Evento</h2>
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
                    <Container style={{ width: '50%', backgroundColor: '#242424', color: 'white', borderRadius: '20px', textAlign: 'center' }}>
                        <CDBBox display="flex" flex="fill" justifyContent="center" mt={5} mb={3}>
                            <img
                                src="https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg"
                                alt="Logo Evento"
                                width={200}
                                height={200}
                                style={{ borderRadius: '100px' }}
                            />
                        </CDBBox>
                        <h3>{eventInfo.event_name}</h3>
                        <h6 style={{ textAlign: 'justify' }} className="mx-5 fw-normal my-3">{eventInfo.description}</h6>
                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5">
                            <CDBIcon far icon="calendar" />
                            <h6 className="fw-normal ms-3 mb-0">{convertDate(eventInfo.date)}</h6>
                        </CDBBox>
                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5 mt-2">
                            <CDBIcon far icon="clock" />
                            <h6 className="fw-normal ms-3 mb-0">{eventInfo && eventInfo.hour && convertHour(eventInfo.hour)}</h6>
                        </CDBBox>
                        {eventInfo && eventInfo.type === 'Presencial' ?
                            <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5 mt-2">
                                <CDBIcon icon="map-marker-alt" />
                                <h6 className="fw-normal ms-3 mb-0">{eventInfo.place}</h6>
                            </CDBBox>
                            :
                            <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5 mt-2 mb-5">
                                <CDBIcon icon="link" />
                                <h6 className="fw-normal ms-3 mb-0">{eventInfo.link}</h6>
                            </CDBBox>
                        }
                    </Container>
                </Container>
                <ClusterFooter />
            </div >
        </>
    )
}

export default RegisterEvent