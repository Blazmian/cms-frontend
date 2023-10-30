import {
    AppstoreOutlined,
    CalendarOutlined,
    GiftOutlined,
    TeamOutlined,
    UserSwitchOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const LogisticSideBar = () => {
    
    const { Sider } = Layout;
    
    return (
        <Sider width={200} style={{ background: '#1A1A1A', overflowY: 'auto' }}>
            <div className='p-3' style={{ backgroundColor: '#1A1A1A', color: 'white' }}>
                <h5 className='m-0'>Departamento de lógistica</h5>
                <hr className='mt-3 mb-0' style={{ color: '#3E3E3E' }} />
            </div>
            <div style={{ maxHeight: 'calc(100vh - 200px)' }}>
                <Menu mode="inline" style={{ background: '#1A1A1A' }} theme='dark'>
                    <Menu.SubMenu title="Eventos" icon={<CalendarOutlined />}>
                        <Menu.Item key="1">
                            <NavLink to='/logistica/eventos' style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                Eventos Próximos
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to='/logistica/eventos-concluidos' style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                Eventos Concluidos
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to='/logistica/eventos-cancelados' style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                Eventos Cancelados
                            </NavLink>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="4" icon={<UserSwitchOutlined />}>
                        <NavLink to='/logistica/proveedores' style={{ textDecoration: 'none' }}>
                            Proveedores
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<GiftOutlined />}>
                        <NavLink to='/logistica/patrocinadores' style={{ textDecoration: 'none' }}>
                            Patrocinadores
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<TeamOutlined />}>
                        <NavLink to='/logistica/personal-auxiliar' style={{ textDecoration: 'none' }}>
                            Personal Auxiliar
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="9" icon={<AppstoreOutlined />}>
                        <NavLink to='/logistica/socios' style={{ textDecoration: 'none' }}>
                            socios
                        </NavLink>
                    </Menu.Item>

                    <hr style={{ color: '#3E3E3E' }} />
                    <Menu.Item key="8" icon={<AppstoreOutlined />}>
                        <NavLink to='/logistica/inventario' style={{ textDecoration: 'none' }}>
                            Inventario
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </div>

        </Sider >
    )

}
export default LogisticSideBar

