import { Button, Container, Form, Stack, Row, Col } from "react-bootstrap"
import { CDBIcon } from "cdbreact"
import { useNavigate } from "react-router-dom"
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';
import { useContext, useState } from "react"
import axios, { } from 'axios'
import { ApiUrls } from "../../../tools/ApiUrls"

const CreateProvider = () => {
    const navigate = useNavigate('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [description, setDescription] = useState('')

    const urls = useContext(ApiUrls)

    const handleSubmit = (e) => {
        e.preventDefault()
        createPartner()
    }

    const createPartner = async () => {
        const res = await axios.post(urls.createProvider, {
            name: name,
            email: email,
            cellphone: cellphone,
            description: description,
        }) 

        if(res.data === true){
            setName('')
            setEmail('')
            setCellphone('')
            setDescription('')
            navigate('/logistica/proveedores')
            //toast.custom((t) => (<ToastManager title={'Excelente'} text={'Socio creado correctamente'} type={'success'}/>))
        }
    }

    return (
        <>
            <Container fluid className="p-3">
                <Container className="d-flex align-items-center" fluid>
                    <Button variant="dark" style={{ borderRadius: '30px', height: '50px', width: '50px' }} onClick={() => navigate('/logistica/proveedores')}>
                        <CDBIcon icon="angle-left" size="2x" />
                    </Button>
                    <h2 className="m-0 ms-3 fw-bold">Crear proveedor</h2>
                </Container>
                <hr className="mx-3"/>
                
                <Form className="p-3" onSubmit={handleSubmit} style={{marginTop:'-20px'}}>
                <h2 style={{fontSize:'20px', fontWeight:'bold'}}>Detalles del proveedor</h2>
                    <Container className="d-flex align-items-center" fluid>
                        <Container className="mx-5" style={{marginTop:'10px'}}>
                        <div class="row">
                            <div class="col">
                            <Form.Group as={Row}>
                            <Form.Label column sm='3'>Nombre del proveedor</Form.Label>
                            <Col>
                            <Form.Control type="text"  placeholder="" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>  
                            </Col>
                            </Form.Group>
                            </div>
                            <div class="col">
                            <Form.Group as={Row}>
                            <Form.Label column sm='3'>Correo electrónico</Form.Label>
                            <Col>
                            <Form.Control type="text"  placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                            </Col>
                            </Form.Group>
                            </div>
                        </div>

                        <div class="row" style={{marginTop:'20px'}}>
                            <div class="col">
                            <Form.Group as={Row}>
                            <Form.Label column sm='3'>Descripción</Form.Label>
                            <Col>
                            <Form.Control type="text"  placeholder="" value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                            </Col>
                            </Form.Group>
                            </div>

                            <div class="col">
                            <Form.Group as={Row}>
                            <Form.Label column sm='3'>Teléfono</Form.Label>
                            <Col>
                            <Form.Control type="text"  placeholder="" value={cellphone} onChange={(e) => setCellphone(e.target.value)}></Form.Control>
                            </Col>
                            </Form.Group>
                            </div>
                        </div>
                        </Container>
                    </Container>
                </Form>
                
            <div style={{marginTop:'-5px'}}>
                <hr className="mx-3"/>
                </div>
                <Button variant="secondary" className='mb-3'>Cancelar</Button>
                    <Button type="submit" onClick={handleSubmit} variant='warning' className="btn float-end">Crear proveedor</Button>
            </Container>

        </>
    )

}

    export default CreateProvider