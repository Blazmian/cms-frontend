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

    const [showModalEdit, setShowModalEdit] = useState(false)
    const handleShowModalEdit = () => setShowModalEdit(true)
    const handleCloseModalEdit = () => setShowModalEdit(false)

    const urls = useContext(ApiUrls)
    const [product, setProduct] = useState({})

    const handleProducts = (product) => {
        setProduct(product)
        handleShowModalEdit()
    }

    const confirmDeleteProduct = (product) => {
        Swal.fire({
            icon: 'warning',
            title: 'Precaución',
            text: '¿Estas seguro de eliminar el producto ' + product.product + '?',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true,
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(product.id)
            } else if (result.isDenied) {

            }
        })
    }

    const deleteProduct = async (id) => {
        const res = await axios.delete(urls.deleteProduct + id)
        if (res.data.affected > 0) {
            toast.custom((t) => (<ToastManager title={'Excelente'} text={'Producto eliminado correctamente'} type={'success'} />))
            handleUpdateTable()
        } else {
            toast.custom((t) => (<ToastManager title={'Error'} text={'No se pudo eliminar el producto'} type={'danger'} />))
        }
    }

    return (

        <Container fluid>
            <EditProduct handleUpdateProduct={handleUpdateTable} show={showModalEdit} handleClose={handleCloseModalEdit} product={product} />
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
                                    <Button style={{ background: 'green', border: 'black' }} onClick={() => handleProducts(product)}><CDBIcon icon="edit" /></Button>
                                    <Button style={{ marginLeft: '10px', background: 'red', border: 'black' }} onClick={() => confirmDeleteProduct(product)}><CDBIcon icon="eraser" /></Button>
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