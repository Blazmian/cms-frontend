import { useContext, useEffect, useState } from "react"
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"
import { CDBIcon } from "cdbreact"

const EditProduct = ({handleUpdateProduct, show, handleClose, product }) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const urls = useContext(ApiUrls)

    useEffect(() => {
        if (product) {
            setName(product.product)
            setPrice(product.price)
            setDescription(product.description)
        }
    }, [product])

    const handleSubmit = (e) => {
        e.preventDefault()
        editProduct()
    }

    const editProduct = async () => {
        const res = await axios.put(urls.editProduct + product.id, {
            product: name,
            price: price,
            description: description,
        })

        toast.custom((t) => (<ToastManager title='Excelente!' text='producto modificado correctamente' type='success' />))
        handleUpdateProduct()
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <CDBIcon icon="pen" />
                    Modificar producto
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                                <Form.Label>Nombre del producto</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Introduzca el nombre del producto" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Precio</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Introduzca el precio del producto" />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Introduzca la descripción del producto" />
                            </Form.Group>
                    </Form>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Cancelar</Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>Modificar</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default EditProduct