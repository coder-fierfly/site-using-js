import React, { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Nav, Sidenav, Collapse, Sidebar, Toggle, Dropdown } from "rsuite";
import { Icon } from "@rsuite/icons";



import { Code } from "@rsuite/icons";
import TopMenu from "./TopMenu";
import Card from "./Card";
import NavItem from "rsuite/esm/Nav/NavItem";

const CollapseMenu = () => {

    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };


    const [activeKey, setActiveKey] = React.useState('0');

    return (
        <Sidebar className="SidebarCollapse"
            width={collapsed ? 57 : 300}
            collapsible
        >
            <Sidenav className="SidenavCollapse" appearance="default"
                expanded={!collapsed}
            >
                <Sidenav.Header>
                    <Sidenav.Toggle id="toggleButton"
                        expanded={collapsed}
                        onToggle={(expanded) => setCollapsed(expanded)}
                    />
                </Sidenav.Header>

                <Sidenav.Body>

                    {/* TODO понять как убрать при свертывании */}
                    <Nav id="menuItems">
                        {!collapsed && (
                            <>
                                <div className="d-flex">
                                    <NavItem><TopMenu /></NavItem>
                                </div>
                                <NavItem><Card /></NavItem>
     
                            </>
                        )}
                    </Nav>


                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
};


export default CollapseMenu;