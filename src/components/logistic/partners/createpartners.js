import { useContext, useState } from "react"
import { Modal, Button, Container, Form } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"
import ToastManager from "../../../tools/ToastManager"
import toast from "react-hot-toast"

const Createpartners = ({ show, handleClose, handleUpdateTable }) => {
    const [folio, setfolio] = useState('a')
    const [socialReason, setSocialReason] = useState('b')
    const [comercialName, setComercialName] = useState('')
    const [legalRepresentative, setlegalRepresentative] = useState('')
    const [payment, setPayment] = useState(9)

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

        if(res.data === true) {
            setfolio('')
            setSocialReason('')
            setComercialName('')
            setlegalRepresentative('')
            setPayment(0)
            handleUpdateTable()
            handleClose()
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
                                <Form.Control type="text" value={folio} onChange={(e) => setfolio(e.target.value)} placeholder="introduzca el folio"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Razon social</Form.Label>
                                <Form.Control type="text" value={socialReason} onChange={(e) => setSocialReason(e.target.value)} placeholder="introduzca la razon social de la empresa"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Nombre comercial</Form.Label>
                                <Form.Control type="text" value={comercialName} onChange={(e) => setComercialName(e.target.value)} placeholder="introduzca el nombre comercial"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Representante legal</Form.Label>
                                <Form.Control type="text" value={legalRepresentative} onChange={(e) => setlegalRepresentative(e.target.value)} placeholder="introduzca el representante legal"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Pago de afiliacion</Form.Label>
                                <Form.Control type="number" value={payment} onChange={(e) => setPayment(e.target.value)} placeholder="introduzca el monto de afiliacion"></Form.Control>
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
export default Createpartners