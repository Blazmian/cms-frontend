import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const LogisticSideBar = () => {

    const { Sider } = Layout;

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem('Eventos', 'sub1', <UserOutlined />, [
            getItem('Eventos Proximos', '1'),
            getItem('Eventos Concluidos/Cancelados', '2'),
        ]),
        getItem('Proveedores', '3', <PieChartOutlined />),
        getItem('Patrocinadores', '4', <DesktopOutlined />),
        getItem('Personal Auxiliar', '5', <PieChartOutlined />),
        getItem('Inventario', '6', <DesktopOutlined />),
    ]


    return (
        <Layout style={{ minHeight: '90vh', }}>
            <Sider>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
        </Layout>
    )

}
export default LogisticSideBar

