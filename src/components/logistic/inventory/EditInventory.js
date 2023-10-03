import { Modal, Button } from "react-bootstrap"
const EditInventory = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Objeto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="form-group row">
                        <label for="inputObject" class="col-sm-4 col-form-label">Nombre del objeto</label>
                        <div class="col-sm-8 mb-3">
                            <input type="Objeto" class="form-control" id="inputObject" placeholder="Objeto"></input>
                        </div>

                        <label for="inputObject" class="col-sm-4 col-form-label">Tipo</label>
                        <div class="col-sm-8 mb-3">
                            <input type="Objeto" class="form-control" id="ObjectType" placeholder="Tipo de objeto"></input>
                        </div>

                        <label for="inputObject" class="col-sm-4 col-form-label">Estado</label>
                        <div class="col-sm-8 mb-3">
                            <input type="Objeto" class="form-control" id="inputObject" placeholder="Estado del objeto"></input>
                        </div>

                        <label for="descriptionObject" class="col-sm-4 col-form-label">Descripcion del objeto</label>
                        <div class="col-sm-8 mb-2">
                            <textarea class="form-control" id="DescriptionObjects" rows="3"></textarea>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Cancelar</Button>
                    <Button variant="primary">Crear</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default EditInventory