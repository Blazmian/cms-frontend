import React, { useContext, useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';
import axios from 'axios';
import { ApiUrls } from '../../../../tools/ApiUrls';

const InterestedPerson = ({ eventId }) => {

    const [persons, setPersons] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getInteresedPersons()
    }, [eventId])

    const getInteresedPersons = async () => {
        const res = await axios.get(urls.getInteressedPersonByEvent + eventId)
        setPersons(res.data)
    }

    return (
        <>
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <CDBTable striped hover responsive maxHeight="45vh" scrollY className="mb-0 table-structure">
                    <CDBTableHeader>
                        <tr style={{ textAlign: 'center' }}>
                            <th>Nombres</th>
                            <th>Empresa</th>
                            <th>Correo</th>
                            <th>Fecha de Registro</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        {persons.map((person) => (
                            <tr style={{ textAlign: 'center' }} key={person.id}>
                                <td>{`${person.interessed.names} ${person.interessed.first_last_name} ${person.interessed.second_last_name}`}</td>
                                <td>{person.interessed.company}</td>
                                <td>{person.interessed.email}</td>
                                <td>{person.interessed.registration_date}</td>
                            </tr>
                        ))}
                    </CDBTableBody>
                </CDBTable>
            </div>
        </>
    )
}

export default InterestedPerson