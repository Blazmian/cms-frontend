import { CDBBox, CDBIcon } from "cdbreact"
import { Container, Stack } from "react-bootstrap"
import { convertDate, convertHour } from "../../../../tools/Methods"

const EventShowcase = ({ event }) => {
    return (
        <>
            <Container fluid className='px-4 pt-4 pb-3' style={{ backgroundColor: '#EFEFEF' }}>
                <Container className='d-flex align-items-center p-0'>
                    <img
                        src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                        width={100}
                        height={100}
                        style={{ borderRadius: '60px' }}
                        alt='Mina'
                        className='mx-5'
                    />
                    <Container fluid>
                        <Stack direction='horizontal' className='align-items-center'>
                            <h3 className='fw-bold me-auto'>{event.event_name}</h3>
                            <div className='d-flex align-items-center'>
                                {event && event.status === 'Proceso' ? (
                                    <>
                                        <div style={{ height: '15px', width: '15px', backgroundColor: '#63EA4D', borderRadius: '10px' }} />
                                        <h6 className='m-0 fw-normal ms-2'>En curso</h6>
                                    </>
                                ) : (
                                    <>
                                        <div style={{ height: '15px', width: '15px', backgroundColor: '#DC3545', borderRadius: '10px' }} />
                                        <h6 className='m-0 fw-normal ms-2'>Cancelado</h6>
                                    </>
                                )}
                            </div>
                        </Stack>
                        <h5 className='fs-6' style={{ textAlign: 'justify' }}>{event.description}</h5>
                        <CDBBox style={{ fontSize: '13px' }} display='flex' flex='fill' alignItems='center'>
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon far icon='calendar' />
                                {convertDate(event.date)}
                            </CDBBox>
                            <CDBBox display='flex' flex='fill' alignItems='center'>
                                <CDBIcon far icon='clock' />
                                {event && event.hour && convertHour(event.hour)}
                            </CDBBox>
                            {event && event.type === 'Presencial' ?
                                <CDBBox display='flex' flex='fill' alignItems='center'>
                                    <CDBIcon icon='map-marker-alt' />
                                    {event.place}
                                </CDBBox>
                                :
                                <></>
                            }
                            {event && event.type === 'Virtual' ?
                                <CDBBox display='flex' flex='fill' alignItems='center'>
                                    <CDBIcon icon='link' />
                                    {event.link}
                                </CDBBox>
                                :
                                <></>
                            }
                        </CDBBox>
                    </Container>
                </Container>
            </Container >
        </>
    )
}

export default EventShowcase