import { CDBBox, CDBIcon } from "cdbreact"
import ClusterFooter from "./Footer"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import NavBarCMS from "./NavBar"
import QRCode from "react-qr-code";

const QRegisterEvent = () => {
    return (
        <>
            <NavBarCMS />
            <Container style={{ height: '90vh' }} className="d-flex p-3" fluid>
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
                <Container style={{ width: '30%', backgroundColor: '#242424', color: 'white', borderRadius: '20px', textAlign: 'center' }}>
                    <CDBBox display="flex" flex="fill" justifyContent="center" mt={5} mb={3}>
                        <img
                            src="https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg"
                            alt="Logo Evento"
                            width={200}
                            height={200}
                            style={{ borderRadius: '100px' }}
                        />
                    </CDBBox>
                    <h3>Nombre del Evento</h3>
                    <h6 style={{ textAlign: 'justify' }} className="mx-5 fw-normal my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>

                    <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5">
                        <CDBIcon far icon="calendar" />
                        <h6 className="fw-normal ms-3 mb-0">Domingo 1 de enero del 2024 (XX días)</h6>
                    </CDBBox>
                    <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5 mt-2">
                        <CDBIcon far icon="clock" />
                        <h6 className="fw-normal ms-3 mb-0">00:00 a.m.</h6>
                    </CDBBox>
                    <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5 mt-2">
                        <CDBIcon icon="map-marker-alt" />
                        <h6 className="fw-normal ms-3 mb-0">Hermosillo, Sonora</h6>
                    </CDBBox>
                    <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5 mt-2 mb-5">
                        <CDBIcon icon="link" />
                        <h6 className="fw-normal ms-3 mb-0">https://meet.google.com/</h6>
                    </CDBBox>
                </Container>
            </Container>
            <ClusterFooter />
        </>
    )
}

export default QRegisterEvent