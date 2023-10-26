import { CDBIcon } from "cdbreact"
import { Stack } from "react-bootstrap"

const ConcludedEvents = () => {
    return (
        <>
            <Stack direction='horizontal' className='mt-3 mx-3'>
                <CDBIcon icon='calendar-check' size='lg' className='me-2' />
                <h3 className='fw-bold m-0'>Eventos concluidos</h3>
            </Stack>
            <hr className='mx-3' />
        </>
    )
}

export default ConcludedEvents