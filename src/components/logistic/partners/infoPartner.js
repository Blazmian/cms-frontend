import { useContext, useEffect, useState } from "react"
import { Modal, Button, Container, Form } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import EditPartner from "./editParner";

const InfoPartner = ({ show, handleClose, idPartner, handleUpdateTable }) => {
    useEffect(() => {
        if (idPartner) {
            getPartner()

        }
    }, [idPartner])

    const urls = useContext(ApiUrls)

    const [partner, setPartner] = useState([])

    const getPartner = async () => {
        const res = await axios.get(urls.getOnePartner + idPartner)
        setPartner(res.data)
        console.log(res.data)
    }


    const confirmDeletePartner = () =>{
Swal.fire({
    icon: 'warning',
    Title: 'Precaucion',
    Text:'¿estas seguro que quieres eliminar?' + partner.comercial_name + '?',
    showCancelButton: true,
    confirmButtonText: 'eliminar',
    cancelButtonText: 'cancelar'
}).then((result) => {
    if(result.isConfirmed){
        deletePartner()
    }else if (result.isDenied){

    }
})
    }

    const deletePartner = async() => {
        const res =await axios.delete(urls.deletePartners + idPartner)
        toast.success()
        handleClose()
        handleUpdateTable()

    }

    const [ShowmodalEdit, setShowModalEdit] = useState(false)
    const handleShowmodalEdit =() => setShowModalEdit(true)
    const handleClosemodalEdit =() => setShowModalEdit(false)

    return (
        <>
        <EditPartner show={ShowmodalEdit} handleClose={handleClosemodalEdit} handleUpdateTable={handleUpdateTable} partner={partner}/>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{partner.comercial_name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Container>
                        {idPartner}
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Cancelar</Button>
                    <Button onClick={confirmDeletePartner} variant="primary" >Eliminar</Button>
                    <Button variant="primary" onClick={handleShowmodalEdit}>editar</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}
export default InfoPartner