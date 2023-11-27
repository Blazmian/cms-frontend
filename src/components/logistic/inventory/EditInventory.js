import { useContext, useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"
import { CDBIcon } from "cdbreact"

const EditInventory = ({ show, handleClose, Inventory, handleUpdateTable }) => {

    const [object, setObject] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')

    const urls = useContext(ApiUrls)

    useEffect(() => {
        if (Inventory) {
            setObject(Inventory.object)
            setDescription(Inventory.description)
            setType(Inventory.type)
            setStatus(Inventory.status)
        }
    }, [Inventory])

    const handleSubmit = (e) => {
        e.preventDefault()
        editInventory()
    }

    const editInventory = async () => {
        const res = await axios.put(urls.editInventory + Inventory.id, {
            object: object,
            description: description,
            type: type,
            status: status,
        })

        handleClose()
        handleUpdateTable()
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title><CDBIcon icon='pen'/>Editar Objeto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="form-group row" onSubmit={handleSubmit}>
                        <label for="inputObject" class="col-sm-4 col-form-label">Nombre del objeto</label>
                        <div class="col-sm-8 mb-3">
                            <input type="text" value={object} onChange={(e) => setObject(e.target.value)} class="form-control" id="inputObject" placeholder="Objeto"></input>
                        </div>

                        <label for="inputObject" class="col-sm-4 col-form-label">Tipo</label>
                        <div class="col-sm-8 mb-3">
                            <input type="text" value={type} onChange={(e) => setType(e.target.value)} class="form-control" id="ObjectType" placeholder="Tipo de objeto"></input>
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
                    <Button className='ms-1' variant='primary' size='lg' style={{ borderRadius: '15px', marginTop: '10px' }} onClick={handleSubmit}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default EditInventory