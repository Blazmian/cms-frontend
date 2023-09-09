import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button, Space } from 'antd';
import { CDBBox } from 'cdbreact';

const LogisticSideBar = () => {
    const { Header, Content, Footer, Sider } = Layout;
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    <Space
        direction="vertical"
        style={{
            width: '100%',
        }}
    ></Space>
    const items = [
        getItem('Eventos', 'sub1', <UserOutlined />, [
            getItem('Eventos Proximos', '1'),
            getItem('Eventos Concluidos/Cancelados', '2'),
        ]),
        getItem('Proveedores', '3', <PieChartOutlined />),
        getItem('Patrocinadores', '4', <DesktopOutlined />),
        getItem('Personal Auxiliar', '5', <PieChartOutlined />),
        getItem('Inventario', '6', <DesktopOutlined />),
    ];

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>

                <h1
                    style={{
                        margin: '16px',
                    }}
                >
                    Listado de eventos
                </h1>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <CDBBox style={{ width: '50px', height: '50px', background: '#000' }}></CDBBox>
                        <Button block
                            style={{
                                textAlign: 'justify',
                                marginLeft: '10px'

                            }}>
                            Evento
                        </Button>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Copyright © 2023 Cluster Minero de Sonora
                </Footer>
            </Layout>
        </Layout>
    );

}
export default LogisticSideBar

