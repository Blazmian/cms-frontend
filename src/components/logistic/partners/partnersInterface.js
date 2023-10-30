import { CDBBox, CDBIcon } from "cdbreact"
import { useContext, useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import Createpartners from "./createpartners";
import axios from "axios";
import { ApiUrls } from "../../../tools/ApiUrls";
import ShowPartners from "./ShowPartners";

const PartnersInterface = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [partners, setPartners] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getPartners()

    }, [])

    const getPartners = async () => {
        const res = await axios.get(urls.getAllPartner)
        setPartners(res.data)
    }

    return(
        <>
        <Createpartners show={show} handleClose={handleClose} handleUpdateTable={getPartners} />
        <CDBBox display='flex' flex='fill' alignItems='center' className='mt-2 mx-3 mb-2'>
                <CDBBox display='flex' flex='fill'>
                    <h3 className='fw-bold m-0'>Listado de socios</h3>
                </CDBBox>
                <CDBBox display='flex'>
                    <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }} onClick={handleShow}>
                        <CDBIcon icon='plus-circle' className='me-2' />Crear socio
                    </Button>
                </CDBBox>
            </CDBBox>
            <div style={{ maxHeight: '84vh', overflowY: 'auto' }}>
                <ShowPartners partners={partners} handleUpdatePartners={getPartners}/>
            </div>
        </>
    )

}
export default PartnersInterface