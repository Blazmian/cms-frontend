import { CDBBox, CDBIcon } from "cdbreact"
import { useEffect, useState } from "react"
import { calculateTimeRemaining } from "../../../../tools/Methods"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const TimeRemaining = ({ event }) => {

    const navigate = useNavigate('')
    const [timeRemaining, setTimeRemaining] = useState([0, 0, 0, 0])

    useEffect(() => {
        setTimeRemaining(calculateTimeRemaining(event.date, event.hour))
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(event.date, event.hour))
        }, 1000)

        return () => clearInterval(interval)
    }, [event])

    return (
        <CDBBox px={3} py={1} display='flex' alignItems="center" style={{ backgroundColor: '#272727', color: 'white' }}>
            <Button
                variant="secondary"
                className="d-flex justify-content-center align-items-center p-0"
                style={{ borderRadius: '30px', height: '40px', width: '40px' }}
                onClick={() => navigate('/logistica/eventos')}>
                <CDBIcon
                    icon="angle-left"
                    size="lg"
                />
            </Button>
            <div className="vr mx-4 me-auto" />
            <Button variant="success" className="me-5">
                Comenzar evento
                <CDBIcon icon="play" className="ms-3" />
            </Button>
            <CDBBox display="flex">
                <div>
                    <h4 className="m-0">{timeRemaining[0].toString().padStart(2, '0')}</h4>
                    <small className='m-0'>días</small>
                </div>
                <h5 className='m-0 mx-2'>:</h5>
                <div>
                    <h4 className="m-0">{timeRemaining[1].toString().padStart(2, '0')}</h4>
                    <small className='m-0'>horas</small>
                </div>

                <h5 className='m-0 mx-2'>:</h5>
                <div>
                    <h4 className="m-0">{timeRemaining[2].toString().padStart(2, '0')}</h4>
                    <small className='m-0'>minutos</small>
                </div>
            </CDBBox>
        </CDBBox>
    )
}

export default TimeRemaining