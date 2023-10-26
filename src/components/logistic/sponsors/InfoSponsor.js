import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Button, Container, Modal, Stack } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import toast from "react-hot-toast"
import ToastManager from "../../../tools/ToastManager"
import Swal from 'sweetalert2'
import EditSponsor from "./EditSponsor"

const InfoSponsor = ({ show, handleClose, idSponsor, handleUpdateTable }) => {

    useEffect(() => {
        if (idSponsor) {
            getSponsor()
        }
    }, [idSponsor])

    const urls = useContext(ApiUrls)

    const [sponsor, setSponsor] = useState({})

    const getSponsor = async () => {
        const res = await axios.get(urls.getOneSponsor + idSponsor)
        setSponsor(res.data)
    }

    const confirmDeleteSponsor = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Precaucion',
            text: '¿Estas seguro de eliminar el patrocinador? ' + sponsor.name + '?',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            focusCancel: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSponsor()
            } else if (result.isDenied) {

            }
        })
    }

    const deleteSponsor = async () => {
        const res = await axios.delete(urls.deleteSponsor + idSponsor)
        toast.custom((t) => (<ToastManager title={'Excelente'} text={'Patrocinador eliminado correctamente'} type={'success'} />))
        handleClose()
        handleUpdateTable()
    }

    const [showModalEdit, setShowModalEdit] = useState(false)
    const handleShowModalEdit = () => setShowModalEdit(true)
    const handleCloseModalEdit = () => setShowModalEdit(false)

    return (
        <>
            <EditSponsor handleUpdateSponsor={getSponsor} show={showModalEdit} handleClose={handleCloseModalEdit} handleUpdateTable={handleUpdateTable} sponsor={sponsor} />
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{`${sponsor.name} - ${sponsor.id}`}</Modal.Title>
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
                                <h3 className="fw-medium" style={{ textDecoration: 'underline' }}>{sponsor.name}</h3>
                                <h3 className="fw-normal">{sponsor.sponsor}</h3>
                                <Stack direction="horizontal" gap={2}>
                                    <div style={{ backgroundColor: '#64B04C', width: '15px', height: '15px', borderRadius: '10px' }} />
                                    <p className="m-0">{sponsor.status}</p>
                                </Stack>
                            </Container>
                        </Stack>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" className="me-auto" onClick={handleClose}>Cancelar</Button>
                    <Button variant="outline-danger" onClick={confirmDeleteSponsor}>Eliminar</Button>
                    <Button variant="primary" onClick={handleShowModalEdit}>Modificar</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}

export default InfoSponsor