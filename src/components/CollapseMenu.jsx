import React, { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Nav, Sidenav, Collapse, Sidebar, Toggle, Dropdown } from "rsuite";
import { Icon } from "@rsuite/icons";

import TopMenu from "./TopMenu";
import Cards from "./Cards";
import NavItem from "rsuite/esm/Nav/NavItem";
import TopMenuFilter from "./TopMenuFilter";


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
                <div className="in_line">
                    <div className="line_element">
                        <Sidenav.Body>
                            {/* TODO понять как убрать при свертывании */}
                            <Nav id="menuItems">
                                {!collapsed && (
                                    <>
                                        <TopMenu />
                                    </>
                                )}
                            </Nav>
                        </Sidenav.Body>
                    </div>
                    <div className="line_element">
                        <div className="toggle">
                            <Sidenav.Header>
                                <Sidenav.Toggle id="toggleButton"
                                    expanded={collapsed}
                                    onToggle={(expanded) => setCollapsed(expanded)}
                                />
                            </Sidenav.Header>
                        </div>
                    </div>
                </div>

                <Sidenav.Body>
                    <Nav id="menuItems">
                        {!collapsed && (
                            <>
                                <TopMenuFilter />
                                <Cards />
                            </>
                        )}
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
};


export default CollapseMenu;