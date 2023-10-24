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

                <hr className="mx-3"/>
                <Form className="p-3" onSubmit={handleSubmit}>
                <h2 style={{fontSize:'20px', fontWeight:'bold'}}>Detalles del producto</h2>
                    <Container className="d-flex align-items-center" fluid>
                        <Stack gap={3} className="col-md-2">
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={150}
                                height={150}
                                style={{ borderRadius: '100px' }}
                                alt='Logo Evento'
                                className="mx-auto"
                            />
                            <Button variant="outline-secondary" style={{ borderRadius: '20px' }}>Seleccionar Foto</Button>
                        </Stack>
                        
                        <Container className="mx-5">
                        <div class="row">
                            <div class="col">
                            <Form.Group as={Row}>
                            <Form.Label column sm='3'>Nombre del producto</Form.Label>
                            <Col>
                            <Form.Control type="text"  placeholder=""></Form.Control>  
                            </Col>
                            </Form.Group>
                            </div>
                            <div class="col">
                            <Form.Group as={Row}>
                            <Form.Label column sm='3'>Precio</Form.Label>
                            <Col>
                            <Form.Control type="number"  placeholder="" ></Form.Control>
                            </Col>
                            </Form.Group>
                            </div>
                        </div>

                            <Form.Group as={Row}>
                            <Form.Label column sm='auto'>Descripción</Form.Label>
                                <Col>
                                    <Form.Control as="textarea" rows={2} placeholder="" ></Form.Control>
                                </Col>
                                </Form.Group>

                        </Container>
                    </Container>
                </Form>


                <Container fluid className="p-3">
                <h2 style={{fontSize:'20px', fontWeight:'bold', marginTop:'-10px'}}>Productos</h2>
                <div style={{ borderRadius: '10px', overflow: 'hidden'}}>
                <CDBTable striped hover responsive maxHeight="22vh" scrollY className="mb-0">
                    <CDBTableHeader>
                        <tr style={{ textAlign: 'center', backgroundColor: '#1D3A69', color: 'white' }}>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Producto</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Descripción</th>
                            <th style={{ backgroundColor: 'black', color: 'white' }}>Precio</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        <tr >
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                        <tr>
                            <td>Nombre de prueba</td>
                            <td>Empresa Prueba A.C.</td>
                            <td>correoprueba@prueba.com</td>
                        </tr>
                    </CDBTableBody>
                </CDBTable>
                
                </div>
            </Container>
            <div style={{marginTop:'-5px'}}>
                <hr className="mx-3"/>
                </div>
                <Button variant="secondary">Cancelar</Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Crear proveedor</Button>
            </Container>

        </>
    )

}

    export default CreateProvider