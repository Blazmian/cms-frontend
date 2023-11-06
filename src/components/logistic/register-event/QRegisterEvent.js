import { CDBBox, CDBIcon } from "cdbreact"
import { Container } from "react-bootstrap"
import NavBarCMS from "../../NavBar"
import QRCode from "react-qr-code";


const QRegisterEvent = () => {
    return (
        <>
            <NavBarCMS />
            <Container style={{ height: '90vh' }} className="d-flex p-3" fluid>
                <Container>
                    <h3 style={{ textAlign: 'center' }} className='fw-bold m-0'>Registro de evento</h3>
                    <div style={{ marginBottom: "40px", height: "auto", marginTop: "22px", margin: "0 auto", maxWidth: 500, width: "100%" }}>
                        <QRCode
                            size={500}
                            alignContent={'center'}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value="http://localhost:3000/logistica/inventario"
                            viewBox={`0 0 500 500`}
                        />
                    </div>
                </Container>

                <Container style={{ width: '60%', backgroundColor: '#242424', color: 'white', borderRadius: '20px', textAlign: 'center' }}>
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
        </>
    )
}

export default QRegisterEvent