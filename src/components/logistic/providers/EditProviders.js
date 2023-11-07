import { useContext, useEffect, useState } from "react"
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"
import { CDBIcon } from "cdbreact"

const EditProvider = ({ handleUpdatePartner, show, handleClose, provider }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [description, setDescription] = useState('')

    const urls = useContext(ApiUrls)

    useEffect(() => {
        if (provider) {
            setName(provider.name)
            setEmail(provider.email)
            setCellphone(provider.cellphone)
            setDescription(provider.description)
        }
    }, [provider])

    const handleSubmit = (e) => {
        e.preventDefault()
        editProvider()
    }

    const editProvider = async () => {
        const res = await axios.put(urls.editProvider + provider.id, {
            name: name,
            email: email,
            cellphone: cellphone,
            description: description,
        })

        toast.custom((t) => (<ToastManager title='Excelente!' text='Socio modificado correctamente' type='success' />))
        handleUpdatePartner()
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <CDBIcon icon="pen" />
                    Modificar proveedor
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Introduzca la razón social de la empresa" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>correo electrónico</Form.Label>
                            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Introduzca el nombre comercial de la empresa" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" value={cellphone} onChange={(e) => setCellphone(e.target.value)} placeholder="Introduzca el nombre del representante legal" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Introduzca el monto de afiliación" />
                            </InputGroup>
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

export default EditProvider