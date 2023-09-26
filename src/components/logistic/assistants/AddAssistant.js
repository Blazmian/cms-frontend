import { CDBBox } from "cdbreact"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"

const AddAssistant = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar auxiliar</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="form-group row">
                        <label for="inputEvent" class="col-sm-4 col-form-label">Nombre del auxiliar</label>
                        <div class="col-sm-8 mb-3">
                            <input type="Auxiliar" class="form-control" id="inputEvents" placeholder="Nombre completo"></input>
                        </div>

                        <label for="inputEvent" class="col-sm-4 col-form-label">Correo electronico</label>
                        <div class="col-sm-8 mb-3">
                            <input type="Auxiliar" class="form-control" id="inputEvents" placeholder="Correo electronico"></input>
                        </div>

                        <label for="inputEvent" class="col-sm-4 col-form-label">Contacto</label>
                        <div class="col-sm-8 mb-3">
                            <input type="Auxiliar" class="form-control" id="inputEvents" placeholder="Celular"></input>
                        </div>

                        <label for="inputEvent" class="col-sm-4 col-form-label">Area</label>
                        <div class="col-sm-8 mb-3">
                            <input type="Auxiliar" class="form-control" id="inputEvents" placeholder="Area que corresponde"></input>
                        </div>

                        <label for="descriptionEvent" class="col-sm-4 col-form-label">Descripcion</label>
                        <div class="col-sm-8 mb-2">
                            <textarea class="form-control" id="DescriptionAssistant" rows="3"></textarea>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Cancelar</Button>
                    <Button variant="primary">Agregar</Button>
                </Modal.Footer>

            </Modal>
        </>
    )

}

export default AddAssistant