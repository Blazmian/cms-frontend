import { CDBBox, CDBIcon } from "cdbreact"
import ClusterFooter from "./Footer"
import { Col, Container, Form, Row } from "react-bootstrap"
import ClusterLogo from '../img/Cluster Logo.png'

const RegisterEvent = () => {
    return (
        <>
            <CDBBox display="flex" flex="fill" style={{ backgroundColor: '#464646' }} justifyContent="start">
                <CDBBox display="flex" className="p-2" style={{ backgroundColor: '#272727', color: 'white', borderRadius: '0 30px 30px 0' }} alignItems="center">
                    <img
                        src={ClusterLogo}
                        width={50}
                        height={50}
                        alt="Cluster Logo"
                    />
                    <h4 className="fw-600 ms-3 me-4 mb-0">Cluster Minero de Sonora</h4>
                </CDBBox>
            </CDBBox>
            <Container style={{ height: '90vh' }} fluid>
                <CDBBox display="flex" flex="fill" p={3}>
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
                        </Form>
                    </Container>
                    <Container style={{ backgroundColor: '#242424', color: 'white', borderRadius: '20px', textAlign: 'center', width: '30%' }}>
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
                        <h6 style={{ textAlign: 'justify' }} className="mx-5 fw-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>

                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5">
                            <CDBIcon far icon="calendar" />
                            <h6 className="fw-normal ms-3 mb-0">Domingo 1 de enero del 2024 (XX días)</h6>
                        </CDBBox>
                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5">
                            <CDBIcon far icon="clock" />
                            <h6 className="fw-normal ms-3 mb-0">00:00 a.m.</h6>
                        </CDBBox>
                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5">
                            <CDBIcon icon="map-marker-alt" />
                            <h6 className="fw-normal ms-3 mb-0">Hermosillo, Sonora</h6>
                        </CDBBox>
                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5">
                            <CDBIcon icon="link" />
                            <h6 className="fw-normal ms-3 mb-0">https://meet.google.com/</h6>
                        </CDBBox>
                    </Container>
                </CDBBox>
            </Container>
            <ClusterFooter />
        </>
    )
}

export default RegisterEvent