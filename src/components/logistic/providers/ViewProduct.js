import { CDBBox } from "cdbreact"
import { Container } from "react-bootstrap"
import ViewProvider from "./ViewProvider"
import { useNavigate } from "react-router-dom"
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';

const ViewProduct = ({ products }) => {

    return (
        <Container fluid>
            <CDBTable striped hover responsive maxHeight="22vh" scrollY className="mb-0">
                <CDBTableHeader>
                    <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                        <th style={{ backgroundColor: 'black', color: 'white' }}>Producto</th>
                        <th style={{ backgroundColor: 'black', color: 'white' }}>Descripción</th>
                        <th style={{ backgroundColor: 'black', color: 'white' }}>Precio</th>
                    </tr>
                </CDBTableHeader>

                {products.map((product) => (
                    <CDBTableBody>
                        <tr >
                            <td>{product.product}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tr>
                    </CDBTableBody>
                ))
                }
            </CDBTable>
        </Container >
    )
}

export default ViewProduct