import React from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';

const Sponsor = () => {
    return (
        <>
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <CDBTable striped hover responsive maxHeight='45vh' scrollY className="mb-0">
                    <CDBTableHeader >
                        <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Patrocinador</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Patrocinio(s)</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Correo</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Descripción</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Fecha</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        <>
                            <tr >
                                <td>Sergio Gomez</td>
                                <td>Patrocinio de prueba</td>
                                <td>correoprueba@prueba.com</td>
                                <td>Descripción</td>
                                <td>DD/MM/AAAA</td>
                            </tr>
                            <tr>
                                <td>Lucia Sanchez</td>
                                <td>Patrocinio de prueba</td>
                                <td>correoprueba@prueba.com</td>
                                <td>Descripción</td>
                                <td>DD/MM/AAAA</td>
                            </tr>
                            <tr>
                                <td>Valeria Garcia</td>
                                <td>Patrocinio de prueba</td>
                                <td>correoprueba@prueba.com</td>
                                <td>Descripción</td>
                                <td>DD/MM/AAAA</td>
                            </tr>
                            <tr>
                                <td>Juan Suarez</td>
                                <td>Patrocinio de prueba</td>
                                <td>correoprueba@prueba.com</td>
                                <td>Descripción</td>
                                <td>DD/MM/AAAA</td>
                            </tr>
                            <tr>
                                <td>Marta Lopez</td>
                                <td>Patrocinio de prueba</td>
                                <td>correoprueba@prueba.com</td>
                                <td>Descripción</td>
                                <td>DD/MM/AAAA</td>
                            </tr>
                            <tr>
                                <td>Mario Medina</td>
                                <td>Patrocinio de prueba</td>
                                <td>correoprueba@prueba.com</td>
                                <td>Descripción</td>
                                <td>DD/MM/AAAA</td>
                            </tr>
                        </>

                    </CDBTableBody>
                </CDBTable>
            </div>
        </>
    )
}

export default Sponsor