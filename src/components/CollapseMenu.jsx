import React, { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Nav, Sidenav, Collapse, Sidebar, Toggle, Dropdown } from "rsuite";
import { Icon } from "@rsuite/icons";


import { Code } from "@rsuite/icons";
import TopMenu from "./TopMenu";
import Card from "./Card";

const CollapseMenu = () => {

    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sidebar className="SidebarCollapse"
            width={collapsed ? 57 : 350}
            collapsible
        >
            <Sidenav className="SidenavCollapse"
                expanded={!collapsed}
            >
                <Sidenav.Body>
                    <Sidenav.Toggle
                        expanded={collapsed}
                        onToggle={(expanded) => setCollapsed(expanded)}
                    />
                    {/* TODO понять как отступ поменять */}
                    <Dropdown eventKey="1">
                        <Dropdown.Item eventKey="1-1"><TopMenu /></Dropdown.Item>
                        <Dropdown.Item eventKey="1-2">
                            <Card />
                        </Dropdown.Item>
                    </Dropdown>

                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
};


export default CollapseMenu;