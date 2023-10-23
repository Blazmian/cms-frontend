import { CDBIcon } from "cdbreact"
import { useContext, useEffect, useState } from "react"
import { Button, InputGroup, Modal, Form, ListGroup, Stack, Container } from "react-bootstrap"
import { ApiUrls } from "../../../../tools/ApiUrls"
import axios from "axios"
import ToastManager from "../../../../tools/ToastManager"
import toast from "react-hot-toast"

const SearchPartner = ({ setPartner, show, handleClose }) => {

    const urls = useContext(ApiUrls)
    const [selectedPartner, setSelectedPartner] = useState({})
    const [partners, setPartners] = useState([])
    const [searchPartner, setSearchPartner] = useState('')

    useEffect(() => {
        getPartners('')
    }, [])

    const handleSearchChange = (e) => {
        const query = e.target.value
        setSearchPartner(query)
        getPartners(e.target.value)
    }

    const getPartners = async (value) => {
        const partners = await axios.get(urls.getPartnersBySocialReason + value)
        setPartners(partners.data)
    }

    const handleSelect = (partner) => {
        setSelectedPartner(partner)
    }

    const handleSelectPartner = () => {
        if (Object.keys(selectedPartner).length !== 0) {
            setPartner(selectedPartner)
            handleClose()
        } else {
            toast.custom(() => <ToastManager title={'¡Advertencia!'} text={'No seleccionaste ningún socio'} type={'warning'} />, { duration: 2000 })
            handleClose()
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Buscar socio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="search-partner"><CDBIcon icon="search" /></InputGroup.Text>
                        <Form.Control
                            placeholder="Introduce el nombre de la empresa asociada"
                            aria-label="Username"
                            id="search-partner"
                            onChange={(e) => handleSearchChange(e)}
                            aria-describedby="search-partner"
                        />
                    </InputGroup>
                    <Container className="p-0 mb-3">
                        <Stack direction="horizontal" gap={1}>
                            <CDBIcon icon="briefcase" />
                            <h5 className="m-0 fw-bold">Empresa seleccionada</h5>
                        </Stack>
                        <Stack direction="horizontal" gap={3} className="mx-4 mt-3">
                            <h6 className="m-0">{Object.keys(selectedPartner).length > 0 ? selectedPartner.folio : 'Folio'}</h6>
                            <h6 className="fw-normal m-0">{Object.keys(selectedPartner).length > 0 ? selectedPartner.comercial_name : 'Nombre comercial'}</h6>
                        </Stack>
                    </Container>
                    <hr />
                    <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                        <ListGroup>
                            {partners.map((partner) => (
                                <ListGroup.Item
                                    key={partner.folio}
                                    action
                                    onClick={() => handleSelect(partner)}
                                >
                                    <Stack direction="horizontal" gap={3} className={'mx-2'}>
                                        <img
                                            src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                            width={50}
                                            height={50}
                                            style={{ borderRadius: '60px' }}
                                            alt='Logo Empresa' />
                                        <Stack gap={1} className="me-auto justify-content-center">
                                            <h6 className="m-0 fw-medium">{partner.comercial_name}</h6>
                                            <h6 className="m-0 fw-normal">{partner.folio}</h6>
                                        </Stack>
                                        <Stack direction="horizontal" className="justify-content-center">
                                            <div style={{ backgroundColor: '#63EA4D', height: '10px', width: '10px', borderRadius: '10px' }} />
                                            <h6 className="m-0 ms-2">{partner.status}</h6>
                                        </Stack>
                                    </Stack>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleSelectPartner}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SearchPartner