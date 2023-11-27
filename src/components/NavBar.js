import { CDBBox } from "cdbreact"
import ClusterLogo from '../img/Cluster Logo.png'
import { Container } from "react-bootstrap"

const NavBarCMS = () => {
    return (
        <Container className='d-flex justify-content-start p-0' style={{ backgroundColor: '#464646' }} fluid>
            <CDBBox display="flex" className="p-2" style={{ height: '8vh', backgroundColor: '#272727', color: 'white', borderRadius: '0 30px 30px 0' }} alignItems="center">
                <img
                    src={ClusterLogo}
                    width={50}
                    height={50}
                    alt="Cluster Logo"
                />
                <h4 className="fw-600 ms-3 me-4 mb-0">Clúster Minero de Sonora</h4>
            </CDBBox>
        </Container>
    )
}

export default NavBarCMS