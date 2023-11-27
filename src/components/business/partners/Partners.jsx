import { CDBIcon } from "cdbreact"
import { Button, Stack } from "react-bootstrap"
import ShowPartners from "./ShowPartners"
import { useContext, useEffect, useState } from "react"
import { ApiUrls } from "../../../tools/ApiUrls"
import axios from "axios"

const Partners = () => {

    const [partners, setPartners] = useState([])
    const urls = useContext(ApiUrls)

    useEffect(() => {
        getPartners()
    }, [])

    const getPartners = async () => {
        const res = await axios.get(urls.getAllPartners)
        setPartners(res.data)
    }

    return (
        <>
            <Stack direction="horizontal" className="mt-3 mx-3">
                <CDBIcon icon='handshake' size='lg' className='me-2' />
                <h3 className='fw-bold m-0 me-auto'>Socios</h3>
                <Button variant='success' style={{ borderRadius: '15px', fontWeight: 'bold' }}>
                    <CDBIcon icon='plus' className='me-2' />Crear socio
                </Button>
            </Stack>
            <hr className="mx-3" />
            <ShowPartners partners={partners} />
        </>
    )
}

export default Partners