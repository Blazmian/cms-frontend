import { CDBBox } from "cdbreact"
import { useState } from "react"
import { Container } from "react-bootstrap"
import ViewAssistants from "./ViewAssistants"
import {useNavigate} from "react-router-dom"

const ShowAssistants = ({ assistants }) => {


    const navigate = useNavigate("")

    return (
        <>
            <Container fluid>
                {assistants.map((assistant) => (
                    <CDBBox onClick={() => navigate(assistant.id)} key={assistant.id} display='flex' flex='fill' style={{ backgroundColor: '#EEEEEE', borderRadius: '15px' }} p={2} my={2}>
                        <CDBBox display='flex' flex='fill' alignItems='center' >
                            <img
                                src={'https://www.foronuclear.org/wp-content/uploads/2014/03/minas-uranio-854x465.jpg'}
                                width={50}
                                height={50}
                                style={{ borderRadius: '60px' }}
                                alt='Mina'
                            />
                            <Container className='ms-2'>
                                <h6 className="hoverEvent">{assistant.name}</h6>
                            </Container>
                        </CDBBox>
                    </CDBBox>
                ))}
            </Container>
        </>
    )
}
export default ShowAssistants