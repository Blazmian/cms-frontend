import { CDBBox, CDBIcon } from "cdbreact"
import { useEffect, useState } from "react"
import { Button, Form, Modal, Stack } from "react-bootstrap"

const EditTracking = ({ show, handleClose, track, handleUpdateTracking }) => {

    const [info, setInfo] = useState('')
    const [note, setNote] = useState('')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState('')

    useEffect(() => {
        setInfo(track.tracking_info)
        setNote(track.notes)
        if (track.visit_date) {
            const dateObj = new Date(track.visit_date)
            const targetDate = dateObj.toLocaleDateString()
            const newDate = targetDate.split("/")
            const formatDate = newDate[2] + "-" + newDate[1].toString().padStart(2, '0') + "-" + newDate[0].toString().padStart(2, '0')
            setDate(formatDate)
            
            
            setTime(dateObj.toLocaleTimeString())
        }
    }, [track])

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <CDBIcon icon="sticky-note" className="me-2" />
                    Nota
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <h6 className="mb-3 fw-semibold">Información de la visita</h6>
                <Form.Control as="textarea" className="mb-3" rows={2} autoFocus value={info} onChange={(e) => setInfo(e.target.value)} />
                <h6 className="mb-3 fw-semibold">Notas de la visita (opcional)</h6>
                <Form.Control as="textarea" className="mb-3" rows={5} value={note} onChange={(e) => setNote(e.target.value)} />

                <CDBBox display="flex" flex="fill" mb={3}>
                    <Stack gap={2} className="me-2">
                        <h6 className="m-0 fw-semibold">Dia</h6>
                        <Form.Control type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                    </Stack>
                    <Stack gap={2} className="ms-2">
                        <h6 className="m-0 fw-semibold">Hora</h6>
                        <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    </Stack>
                </CDBBox>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    <CDBIcon icon="arrow-left" className="me-2" />
                    Regresar
                </Button>
                <Button className="ms-auto">
                    <CDBIcon icon="edit" className="me-2" />
                    Modificar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditTracking