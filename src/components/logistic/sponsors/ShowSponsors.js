import { CDBBox } from "cdbreact"
import { useState } from "react"
import { Container } from "react-bootstrap"
import InfoSponsor from "./InfoSponsor"

const ShowSponsors = ({ sponsors, handleUpdateSponsors }) => {

    const [sponsor, setSponsor] = useState(null)
    const [modalInfoSponsor, setModalInfoSponsor] = useState(false)
    const handleShowInfoSponsor = () => setModalInfoSponsor(true)
    const handleCloseInfoSponsor = () => setModalInfoSponsor(false)


    const showSponsor = (id) => {
        setSponsor(id)
        handleShowInfoSponsor()
    }

    return (
        <>
            <InfoSponsor show={modalInfoSponsor} handleClose={handleCloseInfoSponsor} idSponsor={sponsor} handleUpdateTable={handleUpdateSponsors} />
            <Container fluid >
                {sponsors.map((sponsor) => (
                    <CDBBox onClick={() => showSponsor(sponsor.id)} className="list-result" display='flex' flex='fill' p={2} my={2}>
                        <CDBBox display='flex' flex='fill' alignItems='center' >
                        <img
                                src={'https://www.flaticon.es/icono-gratis/usuario_8038492?term=user&page=1&position=16&origin=search&related_id=8038492'}
                                width={70}
                                height={70}
                                style={{ borderRadius: '60px' }}
                                alt='Mina'
                            />
                            <Container className='ms-2' >
                                <h4 className="fw-bold mb-2">{sponsor.name}</h4>
                                <h6 className="mb-1">{sponsor.sponsor}</h6>
                                <h6 className='fw-normal' style={{color: '#454546'}}>{sponsor.description}</h6>
                            </Container>
                        </CDBBox>
                        <CDBBox display='flex' className='me-2' alignItems="center">
                            <p className="m-0">{sponsor.date}</p>
                        </CDBBox>
                    </CDBBox>
                ))
                }
            </Container>
        </>
    )
}

export default ShowSponsors