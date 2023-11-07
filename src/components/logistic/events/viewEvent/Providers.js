import React from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';

const Providers = () => {
    return (
        <>
            <div style={{ borderRadius: '10px', overflowY: 'hidden' }}>
                <CDBTable striped hover responsive maxHeight="45vh" scrollY className="mb-0">
                    <CDBTableHeader>
                        <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Proveedor</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Producto(s)</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Precio unitario</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Cantidad</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Precio total</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        <tr>
                            <td rowSpan={'4'} >Nombre de prueba</td>
                            <td>Producto prueba 1</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td>Producto prueba 2</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td>Producto prueba 3</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>$10,908</td>
                        </tr>
                        <tr >
                            <td rowSpan={'4'} >Nombre de prueba</td>
                            <td>Producto prueba 1</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td>Producto prueba 2</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td>Producto prueba 3</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>$10,908</td>
                        </tr>
                        <tr >
                            <td rowSpan={'4'} >Nombre de prueba</td>
                            <td>Producto prueba 1</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td>Producto prueba 2</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td>Producto prueba 3</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>$10,908</td>
                        </tr>
                        <tr >
                            <td rowSpan={'4'} >Nombre de prueba</td>
                            <td>Producto prueba 1</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td>Producto prueba 2</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td>Producto prueba 3</td>
                            <td>$1,212</td>
                            <td>3</td>
                            <td>$3,636</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>$10,908</td>
                        </tr>
                    </CDBTableBody>
                </CDBTable>
                Precio Total: $32,724
            </div>
        </>
    )
}

export default Providers