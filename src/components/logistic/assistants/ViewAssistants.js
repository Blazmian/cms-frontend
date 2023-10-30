import { CDBBox, CDBIcon } from 'cdbreact'
import { Button, Container, Stack } from 'react-bootstrap'
import EditAssistant from './EditAssistant';
import ViewAssistedEvents from './ViewAssistedEvents';
import { useContext, useEffect, useState } from 'react';
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';


const ViewAssistants = () => {

    const {id} = useParams()

    useEffect(() => {
        if (id) {
            getAssistant()

        }
    }, [id])

    const urls = useContext(ApiUrls)

    const [assistant, setAssistant] = useState([])

    const getAssistant = async () => {
        const res = await axios.get(urls.getOneAssitant + id)
        setAssistant(res.data)
        console.log(res.data)
    }


    const confirmDeleteAssistant = () =>{
Swal.fire({
    icon: 'warning',
    Title: 'Precaucion',
    Text:'¿estas seguro que quieres eliminar?' + assistant.name + '?',
    showCancelButton: true,
    confirmButtonText: 'eliminar',
    cancelButtonText: 'cancelar'
}).then((result) => {
    if(result.isConfirmed){
        deleteAssistant()
    }else if (result.isDenied){

    }
})
    }

    const deleteAssistant = async() => {
        const res =await axios.delete(urls.deleteAssistant + id)
        toast.success()

    }

    // For modal component
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // For modal component
    const [showAssistedEvents, setShowAssistedEvents] = useState(false);
    const handleCloseAssistedEvents = () => setShowAssistedEvents(false);
    const handleShowAssistedEvents = () => setShowAssistedEvents(true);

    return (
        <>
            <EditAssistant show={showEdit} handleClose={handleCloseEdit}  Assistant={assistant} />
            <ViewAssistedEvents show={showAssistedEvents} handleClose={handleCloseAssistedEvents} />
            <h2 style={{ margin: '10px' }}>Visualizar auxiliar</h2>
            <hr />
            <Container fluid className='m-0 pt-4 px-4 pb-3 d-flex align-items-center'>
                <img
                    src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                    width={120}
                    height={120}
                    style={{ borderRadius: '60px' }}
                    alt='Mina'
                    className='mx-6'
                />
                <Container fluid>
                    <h4 className={'fw-bold'} >Nombre del auxiliar</h4>
                    <h4 className='fs-4' style={{ textAlign: 'justify' }}>{assistant.name}</h4>
                </Container>
            </Container>
            <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
                <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Correo electronico:  </h5>
                <h5 className='fs-5' style={{ textAlign: 'justify' }}>{assistant.email}</h5>
            </CDBBox>
            <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
                <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Contacto:  </h5>
                <h5 className='fs-5' style={{ textAlign: 'justify' }}>{assistant.cellphone}</h5>
            </CDBBox>
            <CDBBox style={{ fontSize: '13px', marginBottom: '10px' }} display='flex' flex='fill' alignItems='center'>
                <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '35px' }}>Area:  </h5>
                <h5 className='fs-5' style={{ textAlign: 'justify' }}>{assistant.area}</h5>
            </CDBBox>
            <Container fluid>
                <CDBBox style={{ fontSize: '13px' }} display='flex' flex='fill' >
                    <h5 className={'fw-bold fs-5 me-3'} style={{ marginLeft: '22px' }}>Descripcion:  </h5>
                    <h5 className='fs-5' style={{ textAlign: 'justify' }}>{assistant.description}</h5>
                </CDBBox>
            </Container>
            <hr />
            <Button className='ms-1' variant="secondary" size='lg' style={{borderRadius: '15px', marginRight: '900px', marginTop: '10px' }} onClick={confirmDeleteAssistant}>Eliminar</Button>
            <Button className='ms-1' variant="primary" size='lg' style={{borderRadius: '15px', marginTop: '10px' }} onClick={handleShowAssistedEvents}>Eventos auxiliados</Button>
            <Button className='ms-1' variant="primary" size='lg' style={{borderRadius: '15px', marginTop: '10px' }} onClick={handleShowEdit}>Editar</Button>
        </>
    )
}

export default ViewAssistants