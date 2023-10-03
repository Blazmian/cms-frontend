import React, { useContext, useEffect, useState } from 'react';
import { CDBBox, CDBIcon } from 'cdbreact';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import ShowUpcomingEvents from './ShowUpcomingEvents';
import { ApiUrls } from '../../../tools/ApiUrls';
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
            <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Listado de Eventos</h3>
                </CDBBox>
                <CDBBox display='flex'>
                    <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={() => navigate('/logistica/crear-evento')}>
                        <CDBIcon icon='plus-circle' className='me-2' />Crear Evento
                    </Button>
                </CDBBox>
            </CDBBox>
            <div style={{ maxHeight: '84vh', overflowY: 'auto' }}>
                <ShowUpcomingEvents events={events} />
            </div>
        </>
    )
}

export default UpcomingEvents
