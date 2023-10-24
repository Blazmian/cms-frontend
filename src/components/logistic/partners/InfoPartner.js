import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Button, Container, Modal, Stack } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"
import Swal from 'sweetalert2'
import EditPartner from "./EditPartner"

const InfoPartner = ({ show, handleClose, idPartner, handleUpdateTable }) => {

    useEffect(() => {
        if (idPartner) {
            getPartner()
        }
    }, [idPartner])

    const urls = useContext(ApiUrls)

    const [partner, setPartner] = useState({})

    const getPartner = async () => {
        const res = await axios.get(urls.getOnePartner + idPartner)
        setPartner(res.data)
    }

    const confirmDeletePartner = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Precaucion',
            text: '¿Estas seguro de eliminar el socio ' + partner.comercial_name + '?',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            focusCancel: true
        }).then((result) => {
            if (result.isConfirmed) {
                deletePartner()
            } else if (result.isDenied) {

            }
        })
    }

    const deletePartner = async () => {
        const res = await axios.delete(urls.deletePartner + idPartner)
        toast.custom((t) => (<ToastManager title={'Excelente'} text={'Socio eliminado correctamente'} type={'success'} />))
        handleClose()
        handleUpdateTable()
    }

    const [showModalEdit, setShowModalEdit] = useState(false)
    const handleShowModalEdit = () => setShowModalEdit(true)
    const handleCloseModalEdit = () => setShowModalEdit(false)

    return (
        <>
            <EditPartner handleUpdatePartner={getPartner} show={showModalEdit} handleClose={handleCloseModalEdit} handleUpdateTable={handleUpdateTable} partner={partner} />
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{`${partner.comercial_name} - ${partner.folio}`}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Stack direction="horizontal" gap={3}>
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={100}
                                height={100}
                                style={{ borderRadius: '60px' }}
                                alt='Mina'
                            />
                            <Container>
                                <h3 className="fw-medium" style={{ textDecoration: 'underline' }}>{partner.social_reason}</h3>
                                <h3 className="fw-normal">{partner.comercial_name}</h3>
                                <Stack direction="horizontal" gap={2}>
                                    <div style={{ backgroundColor: '#64B04C', width: '15px', height: '15px', borderRadius: '10px' }} />
                                    <p className="m-0">{partner.status}</p>
                                </Stack>
                            </Container>
                        </Stack>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" className="me-auto" onClick={handleClose}>Cancelar</Button>
                    <Button variant="outline-danger" onClick={confirmDeletePartner}>Eliminar</Button>
                    <Button variant="primary" onClick={handleShowModalEdit}>Modificar</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}

export default InfoPartner