import { CDBBox } from "cdbreact"
import { useState } from "react"
import { Container } from "react-bootstrap"
import InfoSponsor from "./InfoSponsor"

const ShowSponsors = ({ sponsors, handleUpdateSponsors }) => {

    const [sponsor, setSponsor] = useState(null)
    const [modalInfoSponsor, setModalInfoSponsor] = useState(false)
    const handleShowInfoSponsor = () => setModalInfoSponsor(true)
    const handleCloseInfoSponsor = () => setModalInfoSponsor(false)


    const showSponsor = (folio) => {
        setSponsor(folio)
        handleShowInfoSponsor()
    }

    return (
        <>
            <InfoSponsor show={modalInfoSponsor} handleClose={handleCloseInfoSponsor} idSponsor={sponsor} handleUpdateTable={handleUpdateSponsors} />
            <Container fluid >
                <CDBBox className="hoverSponsor" display='flex' flex='fill' p={2} my={2}>
                    <CDBBox display='flex' flex='fill' alignItems='center' >
                        <img
                            src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                            width={50}
                            height={50}
                            style={{ borderRadius: '60px' }}
                            alt='Mina'
                        />
                        <Container className='ms-2' > 
                            <h6 onClick={handleShowInfoSponsor}>Hola</h6>
                            <p className='m-0'>3</p>
                        </Container>
                    </CDBBox>
                    <CDBBox display='flex' className='me-2' alignItems="center">
                        <div className="me-1" style={{ backgroundColor: '#64B04C', width: '15px', height: '15px', borderRadius: '10px' }} />
                        <p className="m-0">Activo</p>
                    </CDBBox>
                </CDBBox>
            </Container>
        </>
    )
}

export default ShowSponsors