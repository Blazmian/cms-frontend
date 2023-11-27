import { CDBBox } from "cdbreact"
import { Container } from "react-bootstrap"
import { convertDate } from "../../../tools/Methods"
import { useNavigate } from "react-router-dom"

const ShowPartners = ({ partners }) => {

    const navigate = useNavigate('')

    return (
        <Container fluid>
            {partners.map((partner) => (
                <CDBBox className="list-result2" onClick={() => navigate(`${partner.folio}/seguimiento`)} key={partner.folio} display="flex" flex="fill" alignItems="center" py={2} px={3} my={2}>
                    <img
                        src="https://smbb.mx/wp-content/uploads/2022/09/user.png"
                        width={70}
                        height={70}
                        style={{ borderRadius: '60px' }}
                        alt="partner"
                    />
                    <div className='ms-2 px-3 me-auto'>
                        <CDBBox display="flex" flex="fill" alignItems="center" mb={2}>
                            <h6 className="fw-bold mb-0">{partner.comercial_name}</h6>
                            <p className="mx-2 mb-0">-</p>
                            <h6 className="fw-normal mb-0">{partner.social_reason}</h6>
                        </CDBBox>
                        <p className='m-0'>{partner.folio}</p>
                    </div>
                    <div>
                        <CDBBox display="flex" alignItems="center" mb={2} justifyContent="end">
                            <div style={{ height: '13px', width: '13px', borderRadius: '10px', backgroundColor: 'green' }} />
                            <h6 className="fw-medium ms-2 mb-0">Activo</h6>
                        </CDBBox>
                        <h6 className="fw-normal mb-0">{partner.expiration_date && convertDate(partner.expiration_date.toString().split('T')[0])}</h6>
                    </div>
                </CDBBox>
            ))}
        </Container>
    )
}

export default ShowPartners