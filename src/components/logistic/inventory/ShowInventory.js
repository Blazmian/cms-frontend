import { CDBTable, CDBTableBody, CDBTableHeader } from "cdbreact"
import { useNavigate } from "react-router-dom"

const ShowInventory = ({ inventory }) => {

    const navigate = useNavigate("")

    return (
        <>
            <CDBTable striped hover responsive maxHeight="70vh" scrollY className="mb-0">
                <CDBTableHeader>
                    <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                        <th style={{ backgroundColor: 'black', color: 'white' }}>Nombre</th>
                        <th style={{ backgroundColor: 'black', color: 'white' }}>Descripción</th>
                        <th style={{ backgroundColor: 'black', color: 'white' }}>Tipo</th>
                        <th style={{ backgroundColor: 'black', color: 'white' }}>Estado</th>
                    </tr>
                </CDBTableHeader>
                <CDBTableBody>
                    {inventory.map((inventory) => (
                        <tr onClick={() => navigate(inventory.id + "")} key={inventory.id}>
                            <td>{inventory.object}</td>
                            <td>{inventory.description}</td>
                            <td>{inventory.type}</td>
                            <td>{inventory.status}</td>
                        </tr>
                    ))}
                </CDBTableBody>
            </CDBTable>
        </>
    )
}
export default ShowInventory