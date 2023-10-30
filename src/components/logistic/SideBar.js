import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';

const LogisticSideBar = () => {
    return (
        <>
            <div style={{ display: 'flex', overflow: 'scroll initial' }}>
                <CDBSidebar backgroundColor="#1A1A1A" textColor="#fff">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Dpto. de Logistica</CDBSidebarHeader>
                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink to="/logistica/eventos" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                <CDBSidebarMenuItem icon="calendar">Eventos próximos</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/logistica/eventos-concluidos" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                <CDBSidebarMenuItem icon="calendar-check">Eventos concluidos</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/logistica/eventos-cancelados" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                <CDBSidebarMenuItem icon="calendar-minus">Eventos cancelados</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/logistica/proveedores" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                <CDBSidebarMenuItem icon="people-arrows">Proveedores</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/logistica/patrocinadores" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                <CDBSidebarMenuItem icon="gift">Patrocinadores</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/logistica/personal-auxiliar" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                <CDBSidebarMenuItem icon="users">Personal auxiliar</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/logistica/inventario" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                <CDBSidebarMenuItem icon="archive">Inventario</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/logistica/socios" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                <CDBSidebarMenuItem icon="sync">Socios</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter>
                        <CDBSidebarMenu>
                            <NavLink>
                                <CDBSidebarMenuItem icon='bullhorn'>Acerca de Nosotros</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/logistica/configuracion" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                                <CDBSidebarMenuItem icon="wrench">Configuración</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink>
                                <CDBSidebarMenuItem icon='sign-out-alt'>Cerrar Sesión</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
        </>

    )

}
export default LogisticSideBar

