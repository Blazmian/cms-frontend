import React, { useContext, useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBBox, CDBIcon } from 'cdbreact';
import { Button } from 'react-bootstrap';
import { ApiUrls } from '../../../../tools/ApiUrls';
import axios from 'axios';

const Sponsor = ({ eventId }) => {

    const [sponsors, setSponsors] = useState([])

    useEffect(() => {
        getSponsors()
    }, [eventId])

    const urls = useContext(ApiUrls)

    const getSponsors = async () => {
        const res = await axios.get(urls.getSponsorsFromEvent + eventId)
        setSponsors(res.data)
    }

    return (
        <>
            <CDBBox display='flex' alignItems='center' className='mb-3'>
                <h5 className='mb-0 fw-bold'>Patrocinadores del evento: </h5>
                <h5 className='mb-0 ms-2 me-auto fw-normal'>{sponsors.length}</h5>
                <Button variant='warning'>
                    <CDBIcon icon='plus' className='me-2' />
                    Agregar patrocinador
                </Button>
            </CDBBox>
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <CDBTable striped hover responsive maxHeight='45vh' scrollY className="mb-0 table-structure">
                    <CDBTableHeader>
                        <tr>
                            <th>Patrocinador</th>
                            <th>Patrocinio(s)</th>
                            <th>Correo</th>
                            <th>Fecha</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        {sponsors.map((sponsor) => (
                            <tr key={sponsor.id}>
                                <td>{sponsor.sponsor.name}</td>
                                <td>{sponsor.sponsor.sponsor}</td>
                                <td>{sponsor.sponsor.email}</td>
                                <td>{sponsor.sponsor.date}</td>
                            </tr>
                        ))}
                    </CDBTableBody>
                </CDBTable>
            </div>
        </>
    )
}

export default Sponsor