import { CDBBox, CDBIcon } from "cdbreact"
import { Button, Container } from "react-bootstrap"
import ViewProvider from "./ViewProvider"
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';
import EditProduct from "./EditProduct";
import { useContext, useEffect, useState } from "react"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios, { } from 'axios'
import { useParams } from 'react-router-dom'
import Swal from "sweetalert2"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"
import { useNavigate } from "react-router-dom"


const ViewProduct = ({ products, handleUpdateTable }) => {

    const navigate = useNavigate('')

    const [showModalEdit, setShowModalEdit] = useState(false)
    const handleShowModalEdit = () => setShowModalEdit(true)
    const handleCloseModalEdit = () => setShowModalEdit(false)

    const urls = useContext(ApiUrls)
    const [provider, setProvider] = useState({})

    const { id } = useParams()

    const getProvider = async () => {
        const res = await axios.get(urls.getOneProvider + id)
        console.log(res.data)
        setProvider(res.data)
    }

    useEffect(() => {
        console.log(products)
    })

      const confirmDeleteProduct = () => {
          Swal.fire({
              icon: 'warning',
              title: 'Precaución',
              text: '¿Estas seguro de eliminar el producto ' + provider.name + '?',
              showCancelButton: true,
              confirmButtonText: 'Eliminar',
              cancelButtonText: 'Cancelar',
              focusCancel: true,
          }).then((result) => {
              if (result.isConfirmed) {
                  deleteProduct()
              } else if (result.isDenied) {
  
              }
          })
      }
  
      const deleteProduct = async () => {
          const res = await axios.delete(urls.deleteProduct + id)
          toast.custom((t) => (<ToastManager title={'Excelente'} text={'Producto eliminado correctamente'} type={'success'} />))
          navigate('/logistica/proveedores/' + id)
      }
      

    return (

        <Container fluid>
            <EditProduct handleUpdateProduct={getProvider} show={showModalEdit} handleClose={handleCloseModalEdit} provider={provider} />
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <CDBTable striped hover responsive maxHeight="34vh" scrollY className="mb-0">
                    <CDBTableHeader>
                        <tr style={{ backgroundColor: '#1D3A69', color: 'white' }}>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Producto</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Descripción</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Precio</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Acciones</th>
                        </tr>
                    </CDBTableHeader>

                    {products.map((product) => (
                        <CDBTableBody>
                            <tr >
                                <td >{product.product}</td>
                                <td >{product.description}</td>
                                <td >{product.price}</td>
                                <td>
                                    <Button style={{ background: 'green', border: 'black' }} onClick={handleShowModalEdit}><CDBIcon icon="edit" /></Button>
                                    <Button style={{ marginLeft: '10px', background: 'red', border: 'black' }} onClick={confirmDeleteProduct}><CDBIcon icon="eraser" /></Button>
                                </td>
                            </tr>
                        </CDBTableBody>
                    ))
                    }
                </CDBTable>
            </div>

        </Container >
    )
}

export default ViewProduct