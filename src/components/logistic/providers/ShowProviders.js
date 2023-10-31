import { CDBBox } from "cdbreact"
import { Container } from "react-bootstrap"
import ViewProvider from "./ViewProvider"
import { useNavigate } from "react-router-dom"

const ShowProviders = ({ providers, handleUpdateProviders }) => {
    const navigate = useNavigate('')

    return (
        <Container fluid>
            {providers.map((provider) => (
                    <CDBBox onClick={() => navigate(provider.id + '')} key={provider.id} display='flex' flex='fill' style={{ backgroundColor: '#EEEEEE', borderRadius: '15px' }} p={2} my={2}>
                        <CDBBox display='flex' flex='fill' alignItems='center' >
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={50}
                                height={50}
                                style={{ borderRadius: '60px' }}
                                alt='Mina'
                            />
                            <Container className='ms-2'>
                                <h6>{provider.name}</h6>
                                <p className='m-0'>{provider.name}</p>
                            </Container>
                        </CDBBox>
                    </CDBBox>
            ))
            }
        </Container >
    )
}

export default ShowProviders