import { useContext, useState } from "react"
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"

const CreateProduct = ({ show, handleClose, idProvider, handleUpdateTable}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const urls = useContext(ApiUrls)

    const handleSubmit = (e) => {
        e.preventDefault()
        createProduct()
    }

    const createProduct = async () => {
        console.log(idProvider)
        const res = await axios.post(urls.createProduct, {
            product: name,
            price: price,
            description: description,
            provider: idProvider,
        })

        if (res.data === true) {
            setName('')
            setPrice(0)
            setDescription('')
            toast.custom((t) => (<ToastManager title='Excelente!' text='Producto creado correctamente' type='success' />))   
            handleUpdateTable()
            handleClose()
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar producto</Modal.Title>
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
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Crear</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}

export default CreateProduct