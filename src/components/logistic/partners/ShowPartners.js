import { CDBBox } from "cdbreact"
import { useState } from "react"
import { Container } from "react-bootstrap"
import InfoPartner from "./infoPartner"

const ShowPartners = ({ partners, handleUpdatePartners }) => {
    const [partner, setPartner] = useState(null)
    const [modalInfoPartner, setModalInfoPartner] = useState(false)
    const handleShowInfoPartner = () => setModalInfoPartner(true)
    const handleCloseInfoPartner = () => setModalInfoPartner(false)

    const showPartner = (folio) => {
        setPartner(folio)
        handleShowInfoPartner()
    }

    return (
        <>
            <InfoPartner show={modalInfoPartner} handleClose={handleCloseInfoPartner} idPartner={partner} handleUpdateTable={handleUpdatePartners}/>
            <Container fluid>
                {partners.map((partner) => (
                    <CDBBox onClick={() => showPartner(partner.folio)} key={partner.folio} display='flex' flex='fill' style={{ backgroundColor: '#EEEEEE', borderRadius: '15px' }} p={2} my={2}>
                        <CDBBox display='flex' flex='fill' alignItems='center' >
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={50}
                                height={50}
                                style={{ borderRadius: '60px' }}
                                alt='Mina'
                            />
                            <Container className='ms-2'>
                                <h6 onClick={handleShowInfoPartner} className="hoverEvent">{partner.comercial_name}</h6>
                                <p className='m-0'>{partner.folio}</p>
                            </Container>
                        </CDBBox>
                    </CDBBox>
                ))}
            </Container>
        </>
    )
}
export default ShowPartners