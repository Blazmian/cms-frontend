import { Container } from "react-bootstrap"
import NavBarCMS from "../NavBar"
import BusinessSideBar from "./SideBar"
import { Route, Routes } from "react-router-dom"
import Partners from "./partners/Partners"
import InfoPartner from "./partners/InfoPartner"

const Business = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <NavBarCMS />
            <Container className="d-flex p-0" fluid style={{ height: '92vh' }}>
                <BusinessSideBar />
                <Container className="m-0 p-0" fluid style={{ overflowY: 'auto' }}>
                    <Routes>
                        <Route path="/socios/" element={<Partners />} />
                        <Route path="/socios/:folio/*" element={<InfoPartner />} />
                    </Routes>
                </Container>
            </Container>
        </div>
    )
}

export default Business