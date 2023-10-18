import { useContext, useState } from "react"
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"

const CreatePartner = ({ show, handleClose, handleUpdateTable }) => {

    const [folio, setFolio] = useState('')
    const [socialReason, setSocialReason] = useState('')
    const [comercialName, setComercialName] = useState('')
    const [legalRepresentative, setLegalRepresentative] = useState('')
    const [payment, setPayment] = useState(0)

    const urls = useContext(ApiUrls)

    const handleSubmit = (e) => {
        e.preventDefault()
        createPartner()
    }

    const createPartner = async () => {
        const res = await axios.post(urls.createPartner, {
            folio: folio,
            social_reason: socialReason,
            comercial_name: comercialName,
            legal_representative: legalRepresentative,
            afiliation_payment: payment,
        })

        if (res.data === true) {
            setFolio('')
            setSocialReason('')
            setComercialName('')
            setLegalRepresentative('')
            setPayment(0)
            toast.custom((t) => (<ToastManager title='Excelente!' text='Socio creado correctamente' type='success' />))   
            handleClose()
            handleUpdateTable()
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar socio</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Folio del socio</Form.Label>
                                <Form.Control type="text" value={folio} onChange={(e) => setFolio(e.target.value)} placeholder="Introduzca el folio" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Razón social</Form.Label>
                                <Form.Control type="text" value={socialReason} onChange={(e) => setSocialReason(e.target.value)} placeholder="Introduzca la razón social de la empresa" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre comercial</Form.Label>
                                <Form.Control type="text" value={comercialName} onChange={(e) => setComercialName(e.target.value)} placeholder="Introduzca el nombre comercial de la empresa" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Representante legal</Form.Label>
                                <Form.Control type="text" value={legalRepresentative} onChange={(e) => setLegalRepresentative(e.target.value)} placeholder="Introduzca el nombre del representante legal" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Pago de afiliación</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control type="number" value={payment} onChange={(e) => setPayment(e.target.value)} placeholder="Introduzca el monto de afiliación" />
                                </InputGroup>
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

export default CreatePartner