import { CDBBox, CDBIcon } from "cdbreact"
import { Button, Container, Stack } from "react-bootstrap"
import { convertDateWithTime, getRelativeTime, truncateParagraph } from "../../../../tools/Methods"
import { useContext, useEffect, useState } from "react"
import { ApiUrls } from '../../../../tools/ApiUrls'
import axios from "axios"
import CreateTracking from "./CreateTracking"
import InfoTracking from "./InfoTracking"

const Tracking = ({ partnerFolio }) => {

    const urls = useContext(ApiUrls)
    const [tracking, setTracking] = useState([])
    const [track, setTrack] = useState({})

    useEffect(() => {
        getTracking()
    }, [])


    const getTracking = async () => {
        const res = await axios.get(urls.getTrackingOfPartner + partnerFolio)
        setTracking(res.data)
    }

    const handleSelectTracking = (track) => {
        setTrack(track)
        handleShowInfo()
    }

    const [showCreate, setShowCreate] = useState(false)
    const handleShowCreate = () => setShowCreate(true)
    const handleCloseCreate = () => setShowCreate(false)

    const [showInfo, setShowInfo] = useState(false)
    const handleShowInfo = () => setShowInfo(true)
    const handleCloseInfo = () => setShowInfo(false)

    return (
        <>
            <CreateTracking show={showCreate} handleClose={handleCloseCreate} handleUpdateTracking={getTracking} partnerFolio={partnerFolio} />
            <InfoTracking show={showInfo} handleClose={handleCloseInfo} track={track} handleUpdateTracking={getTracking} />
            <div className="d-flex align-items-center">
                <CDBIcon icon="calendar" />
                <h5 className="fw-semibold ms-1 me-2 mb-0">Ultima visita:</h5>
                <h5 className="fw-normal mb-0 me-auto">{tracking && tracking[0] && tracking[0].visit_date ? convertDateWithTime(tracking[0].visit_date) : 'Aún no se han realizado visitas.'}</h5>
                <Button variant="warning" onClick={handleShowCreate}>
                    <CDBIcon icon="book" className="me-2" />
                    Agregar nota
                </Button>
            </div>
            <Container fluid className="mt-3 p-0">
                <hr className="mb-0" />
                {tracking.map((track) => (
                    <CDBBox display="flex" flex="fill" alignItems="center" py={3} px={2} className="list-result3" key={track.id} onClick={() => handleSelectTracking(track)} >
                        <div className="rounded-2 p-2 me-3" style={{ backgroundColor: '#D9D9D9' }}>
                            <CDBIcon icon="sticky-note" size="2x" />
                        </div>
                        <Stack gap={2} className="me-auto">
                            <h6 className="fw-semibold mb-0">{track.tracking_info}</h6>
                            <p className="mb-0" style={{ color: '#686868' }}>{truncateParagraph(track.notes, 120)}</p>
                        </Stack>
                        <h6 className="mb-0">
                            {getRelativeTime(track.visit_date)}
                        </h6>
                    </CDBBox>
                ))}
            </Container>
        </>
    )
}

export default Tracking