import React, { useContext, useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';
import axios from 'axios';
import { ApiUrls } from '../../../../tools/ApiUrls';

const InterestedPerson = ({ idEvento }) => {

    const [persons, setPersons] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getInteresedPersons()
    }, [idEvento])

    const getInteresedPersons = async () => {
        const res = await axios.get(urls.getInteressedPersonByEvent + idEvento)
        setPersons(res.data)
    }

    return (
        <>
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <CDBTable striped hover responsive maxHeight="50vh" scrollY className="mb-0">
                    <CDBTableHeader>
                        <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Nombres</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Empresa</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Correo</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Fecha de Registro</th>
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