import { CDBBox, CDBIcon } from "cdbreact"
import { Col, Container, Offcanvas, Row } from "react-bootstrap"
import { convertDate, convertHour } from "../../../tools/Methods"

const EventInfoCanva = ({ eventInfo, show, handleClose }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Información del evento</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Container fluid className="pt-2 px-3">
                    <CDBBox display="flex" flex="fill" justifyContent="center" mb={3}>
                        <img
                            src="https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg"
                            alt="Logo Evento"
                            width={200}
                            height={200}
                            style={{ borderRadius: '100px' }}
                        />
                    </CDBBox>
                    <h3>{eventInfo && eventInfo.event_name}</h3>
                    <h6 style={{ textAlign: 'justify' }} className="mx-2 fw-normal my-3">{eventInfo && eventInfo.description}</h6>
                    <Row className="ms-1">
                        <Col md='auto'>
                            <CDBIcon far icon="calendar" />
                        </Col>
                        <Col>
                            <h6 className="fw-normal mb-0">{convertDate(eventInfo && eventInfo.date)}</h6>
                        </Col>
                    </Row>
                    <Row className="ms-1 mt-2">
                        <Col md='1'>
                            <CDBIcon far icon="clock" />
                        </Col>
                        <Col>
                            <h6 className="fw-normal ms-3 mb-0">{eventInfo && eventInfo.hour && convertHour(eventInfo.hour)}</h6>
                        </Col>
                    </Row>
                    {eventInfo && eventInfo.type === 'Presencial' ?
                        <Row className="ms-1 mt-2">
                            <Col md='1'>
                                <CDBIcon icon="map-marker-alt" />
                            </Col>
                            <Col>
                                <h6 className="fw-normal ms-3 mb-0">{eventInfo && eventInfo.place}</h6>
                            </Col>
                        </Row>
                        :
                        <Row className="ms-1 mt-2">
                            <Col md='1'>
                                <CDBIcon icon="link" />
                            </Col>
                            <Col>
                                <h6 className="fw-normal ms-3 mb-0">{eventInfo && eventInfo.link}</h6>
                            </Col>
                        </Row>
                    }
                </Container>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default EventInfoCanva