import React, { useContext, useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBIcon, CDBBox } from 'cdbreact';
import axios from 'axios';
import { ApiUrls } from '../../../../tools/ApiUrls';
import { Button } from 'react-bootstrap';

const Assistant = ({ eventId }) => {

    const [assistants, setAssistants] = useState([])

    useEffect(() => {
        getAssistants()
    }, [eventId])

    const urls = useContext(ApiUrls)

    const getAssistants = async () => {
        const res = await axios.get(urls.getAssistantsFromEvent + eventId)
        setAssistants(res.data)
    }

    return (
        <>
            <CDBBox display='flex' alignItems='center' className='mb-3'>
                <h5 className='mb-0 fw-bold'>Auxiliares del evento: </h5>
                <h5 className='mb-0 ms-2 me-auto fw-normal'>{assistants.length}</h5>
                <Button variant='warning'>
                    <CDBIcon icon='plus' className='me-2' />
                    Agregar auxiliar
                </Button>
            </CDBBox>
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <CDBTable striped hover responsive maxHeight="45vh" scrollY className="mb-0 table-structure">
                    <CDBTableHeader >
                        <tr>
                            <th>Nombre del auxiliar</th>
                            <th>Contacto</th>
                            <th>Área</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        {assistants.map((assistant) => (
                            <tr key={assistant.id}>
                                <td>{`${assistant.assistant.name} ${assistant.assistant.lastname}`}</td>
                                <td>{assistant.assistant.cellphone}</td>
                                <td>{assistant.area}</td>
                            </tr>
                        ))}
                    </CDBTableBody>
                </CDBTable>
            </div>
        </>
    )
}

export default Assistant