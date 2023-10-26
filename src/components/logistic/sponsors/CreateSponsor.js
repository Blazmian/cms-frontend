import { useContext, useState } from "react"
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"

const CreateSponsor = ({ show, handleClose, handleUpdateTable }) => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [sponsor, setSponsor] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const urls = useContext(ApiUrls)

    const handleSubmit = (e) => {
        e.preventDefault()
        createSponsor()
    }

    const createSponsor = async () => {
        const res = await axios.post(urls.createSponsor, {
            id: id,
            name: name,
            sponsor: sponsor,
            email: email,
            description: description,
            date: date
        })

        if (res.data === true) {
            setId('')
            setName('')
            setSponsor('')
            setEmail('')
            setDescription('')
            setDate('')
            toast.custom((t) => (<ToastManager title='Excelente!' text='Patrocinador creado correctamente' type='success' />))   
            handleClose()
            handleUpdateTable()
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar patrocinador</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Folio del patrocinador</Form.Label>
                                <Form.Control type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Introduzca el folio" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre del patrocinador</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Introduzca el nombre del patrocinador" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Patrocinio</Form.Label>
                                <Form.Control type="text" value={sponsor} onChange={(e) => setSponsor(e.target.value)} placeholder="Introduzca lo que se va a patrocinar" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Introduzca el correo electrónico del patrocinador" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Descripción del patrocinador</Form.Label>
                                <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Introduzca una descripción del patrocinador" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Introduzca la fecha" />
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

export default CreateSponsor