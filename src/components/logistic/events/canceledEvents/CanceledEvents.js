import React, { useContext, useEffect, useState } from 'react';
import { CDBIcon } from 'cdbreact';
import { Stack } from 'react-bootstrap';
import axios from 'axios'
import { ApiUrls } from '../../../../tools/ApiUrls';
import ShowCanceledEvents from './ShowCanceledEvents';

const CanceledEvents = () => {

    const [events, setEvents] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = async () => {
        const res = await axios.get(urls.getCanceledEvents)
        setEvents(res.data)
    }

    return (
        <>
            <Stack direction='horizontal' className='mt-3 mx-3'>
                <CDBIcon icon='calendar-minus' size='lg' className='me-2' />
                <h3 className='fw-bold m-0'>Eventos cancelados</h3>
            </Stack>
            <hr className='mx-3' />
            <ShowCanceledEvents events={events} handleUpdateEvents={getEvents} />
        </>
    )
}

export default CanceledEvents