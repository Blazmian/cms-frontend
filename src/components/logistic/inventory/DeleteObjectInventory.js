import { Modal, Button } from "react-bootstrap"

const DeleteObject = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar objeto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="form-group row">
                        <label for="message" class="label">¿Esta seguro de que desea eliminar el objeto?</label>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Cancelar</Button>
                    <Button variant="primary">Eliminar</Button>
                </Modal.Footer>

            </Modal>
        </>
    )

}

export default DeleteObject