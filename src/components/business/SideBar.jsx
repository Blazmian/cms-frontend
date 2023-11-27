import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from "cdbreact"
import { NavLink } from "react-router-dom"

const BusinessSideBar = () => {
    return (
        <div style={{ display: 'flex', overflow: 'scroll initial' }}>
            <CDBSidebar backgroundColor="#1A1A1A" textColor="#fff">
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Dpto. de Negocios</CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/negocios/socios" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                            <CDBSidebarMenuItem icon="handshake">Socios</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter>
                    <CDBSidebarMenu>
                        <NavLink>
                            <CDBSidebarMenuItem icon='bullhorn'>Acerca de Nosotros</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/negocios/configuracion" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                            <CDBSidebarMenuItem icon="wrench">Configuración</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink>
                            <CDBSidebarMenuItem icon='sign-out-alt'>Cerrar Sesión</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

export default BusinessSideBar