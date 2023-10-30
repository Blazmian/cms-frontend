import React, { useContext, useEffect, useState } from 'react';
import { CDBIcon } from 'cdbreact';
import { Button, Stack } from 'react-bootstrap';
import axios from 'axios'
import ShowUpcomingEvents from './ShowUpcomingEvents';
import { ApiUrls } from '../../../../tools/ApiUrls';
import { useNavigate } from 'react-router-dom';

const UpcomingEvents = () => {

    const [events, setEvents] = useState([])
    const navigate = useNavigate('')
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = async () => {
        const res = await axios.get(urls.getUpcomingEvents)
        setEvents(res.data)
    }

    return (
        <>
            <Stack direction='horizontal' className='mt-3 mx-3'>
                <CDBIcon icon='calendar' size='lg' className='me-2' />
                <h3 className='fw-bold m-0 me-auto'>Eventos próximos</h3>
                <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={() => navigate('/logistica/crear-evento')}>
                    <CDBIcon icon='calendar-plus' className='me-2' />Crear Evento
                </Button>
            </Stack>
            <hr className='mx-3' />
            <ShowUpcomingEvents events={events} handleUpdateEvents={getEvents} />
        </>
    )
}

export default UpcomingEvents
