
import { Modal, Button } from "react-bootstrap"

const AddSponsor = ({ show, handleClose }) => {

    

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="form-group row">
                        <label for="inputSponsor" class="col-sm-4 col-form-label">Nombre del patrocinador</label>
                        <div class="col-sm-8 mb-3">
                            <input type="Patrocinador" class="form-control" id="inputSponsor" placeholder="Patrocinador"></input>
                        </div>

                        <label for="inputSponsor" class="col-sm-4 col-form-label">Patrocinio</label>

                        <div class="col-sm-8 mb-3">
                            <input type="Sponsor" class="form-control" id="inputSponsor" placeholder="Oferta de patrocinio"></input>
                        </div>

                        <label for="inputSponsor" class="col-sm-4 col-form-label">Correo electrónico</label>

                        <div class="col-sm-8 mb-3">
                            <input type="Sponsor" class="form-control" id="inputSponsor" placeholder="ej: correoelectronico@gmail.com"></input>
                        </div>

                        <label for="descriptionSponsor" class="col-sm-4 col-form-label">Descripción</label>
                        <div class="col-sm-8 mb-3">
                            <textarea class="form-control" id="DescriptionSponsor" rows="6" placeholder="Información adicional del patrocinador"></textarea>
                        </div>

                        <label for="inputSponsor" class="col-sm-4 col-form-label">Contacto</label>

                        <div class="col-sm-8 mb-3">
                            <input type="Sponsor" class="form-control" id="inputSponsor" placeholder="Número telefónico"></input>
                        </div>

                        <div class="col_one_third col_last c-azul mb-3">
                            <label for="nacimiento" style={{ marginRight: '122px' }}>Fecha<small></small></label>
                            <input type="date" id="nacimiento" name="nacimiento" class="sm-form-control"></input>
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

export default AddSponsor