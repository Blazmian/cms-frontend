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
                    <CDBBox className="list-result" onClick={() => navigate(assistant.id + "")} key={assistant.id} display='flex' flex='fill' p={2} my={2}>
                        <CDBBox display='flex' flex='fill' alignItems='center' >
                            <Container className='ms-2'>
                                <h5 className="hoverEvent">{assistant.name} {assistant.lastname}</h5>
                                <h6 className="hoverEvent">{assistant.cellphone}</h6>
                            </Container>
                        </CDBBox>
                    </CDBBox>
                ))}
            </Container>
        </>
    )
}
export default ShowAssistants