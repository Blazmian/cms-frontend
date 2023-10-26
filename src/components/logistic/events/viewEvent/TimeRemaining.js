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
        <CDBBox p={3} display='flex' alignItems="center" style={{ backgroundColor: '#272727', color: 'white' }}>
            <Button
                variant="secondary"
                className="d-flex justify-content-center align-items-center p-0"
                style={{ borderRadius: '30px', height: '50px', width: '50px' }}
                onClick={() => navigate('/logistica/eventos')}>
                <CDBIcon
                    icon="angle-left"
                    size="2x"
                />
            </Button>
            <div className="vr mx-4 me-auto" />
            <Button variant="success" className="me-5" size="lg">
                Comenzar evento
                <CDBIcon icon="play" className="ms-3" />
            </Button>
            <CDBBox display="flex">
                <div>
                    <h3 className="m-0">{timeRemaining[0].toString().padStart(2, '0')}</h3>
                    <small className='m-0'>días</small>
                </div>
                <h4 className='m-0 mx-2'>:</h4>
                <div>
                    <h3 className="m-0">{timeRemaining[1].toString().padStart(2, '0')}</h3>
                    <small className='m-0'>horas</small>
                </div>

                <h4 className='m-0 mx-2'>:</h4>
                <div>
                    <h3 className="m-0">{timeRemaining[2].toString().padStart(2, '0')}</h3>
                    <small className='m-0'>minutos</small>
                </div>
            </CDBBox>
        </CDBBox>
    )
}

export default TimeRemaining