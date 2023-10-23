import React from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';

const Assistant = () => {
    return (
        <>
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <CDBTable striped hover responsive maxHeight="45vh" scrollY className="mb-0">
                    <CDBTableHeader >
                        <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Nombre del auxiliar</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Contacto</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Descripción</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        <>
                            <tr >
                                <td>Sergio Gomez</td>
                                <td>6621111111</td>
                                <td>Descripción</td>
                            </tr>
                            <tr>
                                <td>Lucia Sanchez</td>
                                <td>6621111111</td>
                                <td>Descripción</td>
                            </tr>
                            <tr>
                                <td>Valeria Garcia</td>
                                <td>6621111111</td>
                                <td>Descripción</td>
                            </tr>
                            <tr>
                                <td>Juan Suarez</td>
                                <td>6621111111</td>
                                <td>Descripción</td>
                            </tr>
                            <tr>
                                <td>Marta Lopez</td>
                                <td>6621111111</td>
                                <td>Descripción</td>
                            </tr>
                            <tr>
                                <td>Mario Medina</td>
                                <td>6621111111</td>
                                <td>Descripción</td>
                            </tr>
                        </>

                    </CDBTableBody>
                </CDBTable>
            </div>
        </>
    )
}

export default Assistant