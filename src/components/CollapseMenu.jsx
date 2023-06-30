import React, { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Nav, Sidenav, Collapse, Sidebar, Toggle } from "rsuite";
import { Icon } from "@rsuite/icons";


import { Code } from "@rsuite/icons";

const CollapseMenu = () => {

    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ height: '100vh' }}>
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                width={collapsed ? 56 : 260}
                collapsible
            >
                <Sidenav
                    expanded={!collapsed}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}
                >
                    <Sidenav.Body>
                        <Sidenav.Toggle
                            expanded={collapsed}
                            onToggle={(expanded) => setCollapsed(expanded)}
                        />

                        <Nav>
                            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                Users
                            </Nav.Item>
                            <Nav.Item eventKey="3" icon={<Icon icon="calendar" />}>
                                Calendar
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </Sidebar>
        </div>
    );
};


export default CollapseMenu;