import axios from "axios"
import { CDBBox, CDBIcon } from "cdbreact"
import { useContext, useState } from "react"
import { Button, Form, Modal, Stack } from "react-bootstrap"
import { ApiUrls } from "../../../../tools/ApiUrls"
import toast from "react-hot-toast"
import ToastManager from "../../../../tools/ToastManager"

const CreateTracking = ({ show, handleClose, handleUpdateTracking, partnerFolio }) => {

    const [info, setInfo] = useState('')
    const [note, setNote] = useState('')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState('')

    const urls = useContext(ApiUrls)

    const createNote = async () => {
        const dateObj = new Date(date.toString().split('-')[0], date.toString().split('-')[1] - 1, date.toString().split('-')[2])
        const [hours, minutes] = time.split(':')
        dateObj.setHours(parseInt(hours, 10), parseInt(minutes, 10))

        const res = await axios.post(urls.createTracking, {
            tracking_info: info,
            notes: note,
            visit_date: dateObj,
            partnerFolio: partnerFolio,
        })
        if (res.data) {
            toast.custom(() => (<ToastManager title={'Exito'} text={'¡Nota agregada correctamente!'} type={'success'} />))
            setInfo('')
            setNote('')
            setDate(new Date())
            setTime('')
            handleUpdateTracking()
            handleClose()
        }
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <CDBIcon icon="book" className="me-2" />
                    Agregar nota
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <Button variant="secondary" onClick={handleClose}>Regresar</Button>
                <Button variant="success" onClick={createNote}>Agregar</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default CreateTracking