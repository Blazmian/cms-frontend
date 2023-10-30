import { CDBIcon } from "cdbreact"
import { useContext, useRef } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import Swal from 'sweetalert2'
import { ApiUrls } from "../../../../tools/ApiUrls"
import axios from 'axios'
import toast from "react-hot-toast"
import ToastManager from "../../../../tools/ToastManager"
import { useNavigate } from "react-router-dom"

const CancelEvent = ({ show, handleClose, event }) => {

    const reason = useRef('')
    const navigate = useNavigate('')

    const urls = useContext(ApiUrls)

    const validateCancelEvent = () => {
        Swal.fire({
            title: 'Advertencia',
            text: `¿Estás seguro de cancelar el evento ${event.event_name}?`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No',
            showConfirmButton: true,
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Si',
            reverseButtons: true,
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                createCancelEvent()
            }
        })
    }

    const createCancelEvent = async () => {
        const res = await axios.post(urls.cancelEvent, {
            reason: reason.current.value,
            event_id: event.id
        })
        if (res.data) {
            toast.custom(() => (<ToastManager title={'Exito'} text={'Evento cancelado correctamente'} type={'success'} />))
            handleClose()
            navigate('/logistica/eventos')
        }
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title><CDBIcon icon="calendar-minus" /> Cancelar evento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Introduce el motivo de la cancelación del evento <strong>{event.event_name}</strong>:
                <Form.Control as="textarea" className="mt-3" rows={5} autoFocus ref={reason} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Regresar</Button>
                <Button variant="danger" onClick={validateCancelEvent}>Cancelar evento</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default CancelEvent