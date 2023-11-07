import { useContext, useEffect, useState } from "react"
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"
import { CDBIcon } from "cdbreact"

const EditSponsor = ({ handleUpdateSponsor, show, handleClose, handleUpdateTable, sponsor }) => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [sponsors, setSponsor] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')


    const urls = useContext(ApiUrls)

    useEffect(() => {
        if (sponsor) {
            setId(sponsor.id)
            setName(sponsor.name)
            setSponsor(sponsor.sponsors)
            setEmail(sponsor.email)
            setDescription(sponsor.description)
            setDate(sponsor.date)
        }
    }, [sponsor])

    const handleSubmit = (e) => {
        e.preventDefault()
        EditSponsor()
    }

    const EditSponsor = async () => {
        const res = await axios.put(urls.editSponsor + sponsor.id, {
            id: id,
            name: name,
            sponsor: sponsors,
            email: email,
            description: description,
            date: date
        })

        toast.custom((t) => (<ToastManager title='Excelente!' text='Patrocinador modificado correctamente' type='success' />))
        handleUpdateSponsor()
        handleClose()
        handleUpdateTable()
    }

    return (
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <CDBIcon icon="pen" />
                    Modificar patrocinador
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Folio del patrocinador</Form.Label>
                            <Form.Control type="text" disabled value={id} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre del patrocinador</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Introduzca el nombre del patrocinador" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Patrocinio</Form.Label>
                            <Form.Control type="text" value={sponsors} onChange={(e) => setSponsor(e.target.value)} placeholder="Introduzca el patrocinio de la empresa" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Introduzca el correo electrónico de la empresa" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Introduzca una descripción breve" />
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

export default EditSponsor