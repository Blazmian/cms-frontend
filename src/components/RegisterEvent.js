import { CDBBox, CDBIcon } from "cdbreact"
import ClusterFooter from "./Footer"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import NavBarCMS from "./NavBar"
import { onlyLetters } from "../tools/InputValidator"
import { phoneNumber } from "../tools/InputValidator"
import { email_ } from "../tools/InputValidator"
import axios, { } from 'axios'
import { ApiUrls } from "../tools/ApiUrls"
import { useState, useContext } from "react"
import toast from "react-hot-toast"

const RegisterEvent = () => {

    const urls = useContext(ApiUrls)

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })

        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null
            })
    }

    const validateForm = () => {
        const { name, company, position, email, phone, expectations } = form
        const newErrors = {}

        if (!name || name === '') {
            newErrors.name = 'Por favor introduzca su nombre'
        } else if (!onlyLetters(name)) {
            newErrors.name = 'Solo se aceptan letras'
        }

        if (!company || company === '') {
            newErrors.company = 'Por favor introduzca el nombre de la compañia'
        } else if (!onlyLetters(company)) {
            newErrors.company = 'Solo se aceptan letras'
        }

        if (!position || position === '') {
            newErrors.position = 'Por favor introduzca su puesto en la empresa'
        } else if (!onlyLetters(position)) {
            newErrors.position = 'Solo se aceptan letras'
        }

        if (!email || email === '') {
            newErrors.email = 'Por favor introduzca su correo'
        } else if (!email_(email)) {
            newErrors.email = 'Introduzca un correo electrónico valido'
        }

        if (!phone || phone === '') {
            newErrors.phone = 'Por favor introduzca su número de telefono'
        } else if (!phoneNumber(phone)) {
            newErrors.phone = 'Introduzca un número telefónico valido'
        }

        if (!expectations || expectations === '') {
            newErrors.expectations = 'Por favor introduzca las expectativas que tiene del evento'
        } else if (!onlyLetters(expectations)) {
            newErrors.expectations = 'Introduzca un número telefónico valido'
        }

        return newErrors
    }

    const handleSubmit = e => {
        e.preventDefault()

        const formErrors = validateForm()

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
        } else {
            addRegister()
        }
    }

    const addRegister = async () => {
        const res = await axios.post(urls.addRegister,
            {
                names: form.name,
                first_last_name: form.first_last_name,
                second_last_name: form.second_last_name,
                company: form.company,
                position: form.position,
                email: form.email,
                phoneNumber: form.phone,
                sex: form.sex,
                eventfind: form.eventfind,
                expectations: form.expectations
            }
        )

    if (res.data === true) {
        toast.success('Registro agregado con exito')
        form.name = ''
        form.first_last_name = ''
        form.second_last_name = ''
        form.company = ''
        form.position = ''
        form.email = ''
        form.phone = ''
        form.sex = ''
        form.eventfind = ''
        form.expectations = ''
    }
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <NavBarCMS />
                <Container style={{ flex: 1 }} className="d-flex p-3" fluid>
                    <Container>
                        <h2>Registro a Evento</h2>
                        <hr />
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="names">
                                <Form.Label column sm={2}>Nombre</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Introduce tu nombre"  onChange={(e) => setField('name', e.target.value)} isInvalid={!!errors.name}/>
                                        <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                        </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="first_last_name">
                                <Form.Label column sm={2}>Primer apellido</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Introduce tu primer apellido"  onChange={(e) => setField('first_last_name', e.target.value)}/>
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3" controlId="second_last_name">
                                <Form.Label column sm={2}>Segundo apelldio</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Introduce tu segundo apellido"  onChange={(e) => setField('second_last_name', e.target.value)}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="company">
                                <Form.Label column sm={2}>Empresa</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Introduce el nombre de la empresa a la que pertenece"  onChange={(e) => setField('company', e.target.value)} isInvalid={!!errors.company}/>
                                        <Form.Control.Feedback type="invalid">
                                        {errors.company}
                                        </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="position">
                                <Form.Label column sm={2}>Puesto</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Introduce el puesto que ejerce"  onChange={(e) => setField('position', e.target.value)} isInvalid={!!errors.position} />
                                        <Form.Control.Feedback type="invalid">
                                        {errors.position}
                                        </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="email">
                                <Form.Label column sm={2}>Correo</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Introduce tu correo electrónico"  onChange={(e) => setField('email', e.target.value)} isInvalid={!!errors.email}/>
                                        <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                        </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="phone">
                                <Form.Label column sm={2}>Teléfono</Form.Label>
                                <Col sm={10}>
                                    <Form.Control placeholder="Introduce tu número celular o teléfono"  onChange={(e) => setField('phone', e.target.value)} isInvalid={!!errors.phone}/>
                                        <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                        </Form.Control.Feedback>
                                
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 d-flex align-items-sm-center" controlId="sex">
                                <Form.Label column sm={2}>Sexo</Form.Label>
                                <Col sm={10}>
                                    <Form.Check inline name='sex' type={'radio'} id={'men'} label={'Masculino'} onChange={(e) => setField('sex', e.target.value)}/>
                                    <Form.Check inline name='sex' type={'radio'} id={'woman'} label={'Femenino'} onChange={(e) => setField('sex', e.target.value)}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 d-flex align-items-sm-center" controlId="eventfind">
                                <Form.Label column sm={2}>¿Cómo te enteraste del evento?</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Introduce tu número celular o teléfono"  onChange={(e) => setField('eventfind', e.target.value)}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="expectations">
                                <Form.Label column sm={2}>Expectativas</Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="textarea" rows={3} placeholder="Describe las expectativas que tiene sobre el evento."  onChange={(e) => setField('expectations', e.target.value)} isInvalid={!!errors.expectations}/>
                                        <Form.Control.Feedback type="invalid">
                                        {errors.expectations}
                                        </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Container className="d-flex justify-content-center">
                                <Button type="submit" onClick={handleSubmit}>Registrarse</Button>
                            </Container>
                    </Form>
                </Container>
                <Container style={{ width: '50%', backgroundColor: '#242424', color: 'white', borderRadius: '20px', textAlign: 'center' }}>
                    <CDBBox display="flex" flex="fill" justifyContent="center" mt={5} mb={3}>
                        <img
                            src="https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg"
                            alt="Logo Evento"
                            width={200}
                            height={200}
                            style={{ borderRadius: '100px' }}
                        />
                    </CDBBox>
                    <h3>Nombre del Evento</h3>
                    <h6 style={{ textAlign: 'justify' }} className="mx-5 fw-normal my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5">
                            <CDBIcon far icon="calendar" />
                            <h6 className="fw-normal ms-3 mb-0">Domingo 1 de enero del 2024 (XX días)</h6>
                        </CDBBox>
                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5 mt-2">
                            <CDBIcon far icon="clock" />
                            <h6 className="fw-normal ms-3 mb-0">00:00 a.m.</h6>
                        </CDBBox>
                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5 mt-2">
                            <CDBIcon icon="map-marker-alt" />
                            <h6 className="fw-normal ms-3 mb-0">Hermosillo, Sonora</h6>
                        </CDBBox>
                        <CDBBox display="flex" flex="fill" alignItems="center" className="ms-5 mt-2 mb-5">
                            <CDBIcon icon="link" />
                            <h6 className="fw-normal ms-3 mb-0">https://meet.google.com/</h6>
                        </CDBBox>
                    </Container>
                </Container>
                <ClusterFooter />
            </div >
        </>
    )
}

export default RegisterEvent