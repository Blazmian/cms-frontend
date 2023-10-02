import { CDBBox, CDBIcon } from 'cdbreact'
import { Container } from 'react-bootstrap'

const ViewSponsor = () => {
    return (
        <>
            <Container fluid className='m-0 pt-4 px-4 pb-3 d-flex align-items-center' style={{ backgroundColor: '#EFEFEF' }}>
                <img
                    src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                    width={100}
                    height={100}
                    style={{ borderRadius: '60px' }}
                    alt='Mina'
                    className='mx-5'
                />
                <Container fluid>
                    <h3 className={'fw-bold'} >Vista del evento 1</h3>
                    <h5 className='fs-6' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                    <CDBBox style={{ fontSize: '13px' }} display='flex' flex='fill' alignItems='center'>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon far icon='calendar' />
                            Domingo 1 de enero del 2024 (XX días)
                        </CDBBox>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon far icon='clock' />
                            00:00 p.m
                        </CDBBox>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon icon='map-marker-alt' />
                            Hermosillo, Sonora
                        </CDBBox>
                        <CDBBox display='flex' flex='fill' alignItems='center'>
                            <CDBIcon icon='link' />
                            https://meet.google.com
                        </CDBBox>
                    </CDBBox>
                </Container>
            </Container>
        </>
    )
}

export default ViewSponsor