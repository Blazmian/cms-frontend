import { CDBBox, CDBIcon } from 'cdbreact'
import { useContext, useState } from 'react'
import { Modal, Button } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"

const CreateObject = ({ show, handleClose}) => {

    const [object, setObject] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')

    const urls = useContext(ApiUrls)

    const handleSubmit = async () => {
        const res = await axios.post(urls.createInventory, {
            object: object,
            description: description,
            type: type,
            status: status,
        })

        if (res.data === true) {
            setObject('')
            setDescription('')
            setType('')
            setStatus('')
            handleClose()
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Agregar objeto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="form-group row">
                        <label for="inputObject" class="col-sm-4 col-form-label">Nombre del objeto</label>
                        <div class="col-sm-8 mb-3">
                            <input type="text" value={object} onChange={(e) => setObject(e.target.value)} class="form-control" id="inputObject" placeholder="Objeto"></input>
                        </div>

                        <label for="inputObject" class="col-sm-4 col-form-label">Tipo</label>
                        <div class="col-sm-8 mb-3">
                            <input type="text" value={type} onChange={(e) => setType(e.target.value)} class="form-control" id="ObjectType" placeholder="Tipo de objeto"></input>
                        </div>

                        <label for="inputObject" class="col-sm-4 col-form-label">Estado</label>
                        <div class="col-sm-8 mb-3">
                            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} class="form-control" id="inputObject" placeholder="Estado del objeto"></input>
                        </div>

                        <label for="descriptionObject" class="col-sm-4 col-form-label">Descripcion del objeto</label>
                        <div class="col-sm-8 mb-2">
                            <textarea class="form-control" value={description} onChange={(e) => setDescription(e.target.value)} id="DescriptionObjects" rows="3"></textarea>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button className='ms-1' variant='secondary' size='lg' style={{ borderRadius: '15px', marginTop: '10px' }} onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button className='ms-1' variant='success' size='lg' style={{ borderRadius: '15px', marginTop: '10px' }} onClick={handleSubmit}>
                        Crear
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )

}

export default CreateObject