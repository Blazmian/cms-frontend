import React from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';

const InterestedPerson = () => {
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
                        <tr >
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                            <td>00:00 DD/MM/AAAA</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                            <td>00:00 DD/MM/AAAA</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                            <td>00:00 DD/MM/AAAA</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                            <td>00:00 DD/MM/AAAA</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                            <td>00:00 DD/MM/AAAA</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                            <td>00:00 DD/MM/AAAA</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                            <td>00:00 DD/MM/AAAA</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                            <td>00:00 DD/MM/AAAA</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                            <td>00:00 DD/MM/AAAA</td>
                        </tr>

                    </CDBTableBody>
                </CDBTable>
            </div>
        </>
    )
}

export default InterestedPerson