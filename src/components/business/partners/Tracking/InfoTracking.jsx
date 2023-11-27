import { CDBIcon } from "cdbreact"
import { Button, Modal } from "react-bootstrap"
import Swal from 'sweetalert2'
import { convertDateWithTime, convertHour } from "../../../../tools/Methods"
import axios from "axios"
import { useContext, useState } from "react"
import { ApiUrls } from "../../../../tools/ApiUrls"
import toast from "react-hot-toast"
import ToastManager from "../../../../tools/ToastManager"
import EditTracking from "./EditTracking"

const InfoTracking = ({ show, handleClose, track, handleUpdateTracking }) => {

    const urls = useContext(ApiUrls)

    const confirmDeleteTrack = () => {
        Swal.fire({
            title: 'Advertencia',
            text: '¿Estás seguro de eliminar esta nota?',
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
                deleteTrack()
            }
        })
    }

    const deleteTrack = async () => {
        const res = await axios.delete(urls.deleteTrack + track.id)
        if (res.data.affected > 0) {
            toast.custom(() => (<ToastManager title={'Exito'} text={'Nota eliminada correctamente'} type={'success'} />))
            handleClose()
            handleUpdateTracking()
        }
    }

    const [showEdit, setShowEdit] = useState(false)
    const handleShowEdit = () => setShowEdit(true)
    const handleCloseEdit = () => setShowEdit(false)

    return (
        <>
            <EditTracking show={showEdit} handleClose={handleCloseEdit} track={track} handleUpdateTracking={handleUpdateTracking} />
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <CDBIcon icon="sticky-note" className="me-2" />
                        Nota
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <h5>Información de seguimiento</h5>
                    <p style={{ textAlign: 'justify' }}>{track.tracking_info}</p>
                    <h5>Nota</h5>
                    <p style={{ textAlign: 'justify' }}>{track && track.notes ? track.notes : 'Sin información adicional.'}</p>
                    <h5>Día de la visita</h5>
                    <p>{track && track.visit_date && `${convertDateWithTime(track.visit_date)} a las ${convertHour(new Date(track.visit_date).toLocaleTimeString())}`}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <CDBIcon icon="arrow-left" className="me-2" />
                        Regresar
                    </Button>
                    <Button variant="outline-danger" className="ms-auto" onClick={confirmDeleteTrack}>
                        <CDBIcon icon="trash" className="me-2" />
                        Eliminar
                    </Button>
                    <Button onClick={handleShowEdit}>
                        <CDBIcon icon="edit" className="me-2" />
                        Modificar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InfoTracking