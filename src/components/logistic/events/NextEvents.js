import { Breadcrumb, Layout, Content, Button, colorBgContainer } from 'antd';
import { CDBBox } from 'cdbreact';
import CreateEvent from './CreateEvent';
import { useState } from 'react';

const NextEvent = () => {
    // For modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <CreateEvent show={show} handleClose={handleClose} />
            <Layout>
                <h1
                    style={{
                        marginLeft: '225px',
                        marginTop: '0px'
                    }}
                >
                    Listado de eventos
                </h1>
                <Button onClick={handleShow}>Crear Evento</Button>
            </Layout >
        </>
    )

}

export default NextEvent