import { CDBBox } from "cdbreact"
import { useContext, useEffect, useState } from "react"
import { Form, Modal, Button, Container } from "react-bootstrap"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"

const EditAssistant = ({ show, handleClose, Assistant }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [area, setArea] = useState('')
    const [description, setDescription] = useState('')

    const urls = useContext(ApiUrls)

    useEffect(() => {
        if (Assistant){
            setName(Assistant.name)
            setEmail(Assistant.email)
            setCellphone(Assistant.cellphone)
            setArea(Assistant.area)
            setDescription(Assistant.description)
        }
    }, [Assistant])

    const handleSubmit = (e) => {
        e.preventDefault()
        editAssistant()
    }

    const editAssistant = async () => {
        const res = await axios.put(urls.editAssistant + Assistant.id, {
            name: name,
            email: email,
            cellphone: cellphone,
            area: area,
            description: description,
        })

            handleClose()

    }

    return (
        <>
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar auxiliar</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                    <div class="form-group row" onSubmit={handleSubmit}>
                        <label for="inputEvent" class="col-sm-4 col-form-label">Nombre del auxiliar</label>
                        <div class="col-sm-8 mb-3">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="inputEvents" placeholder="Nombre completo"></input>
                        </div>

                        <label for="inputEvent" class="col-sm-4 col-form-label">Correo electronico</label>
                        <div class="col-sm-8 mb-3">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="inputEvents" placeholder="Correo electronico"></input>
                        </div>

                        <label for="inputEvent" class="col-sm-4 col-form-label">Contacto</label>
                        <div class="col-sm-8 mb-3">
                            <input type="number" value={cellphone} onChange={(e) => setCellphone(e.target.value)} class="form-control" id="inputEvents" placeholder="Celular"></input>
                        </div>

                        <label for="inputEvent" class="col-sm-4 col-form-label">Area</label>
                        <div class="col-sm-8 mb-3">
                            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} class="form-control" id="inputEvents" placeholder="Area que corresponde"></input>
                        </div>

                        <label for="descriptionEvent" class="col-sm-4 col-form-label">Descripcion</label>
                        <div class="col-sm-8 mb-2">
                            <textarea class="form-control" value={description} onChange={(e) => setDescription(e.target.value)} id="DescriptionAssistant" rows="3"></textarea>
                        </div>
                    </div>
                    </Container>
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

export default EditAssistant