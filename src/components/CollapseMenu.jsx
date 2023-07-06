import React, { useState, useEffect } from 'react';
import TimeFilter from "./TimeFilter";
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

    const [result, setResult] = useState(null);


    const [selectedOption, setSelectedOption] = useState(true);

    useEffect(() => {
        setResult(TimeFilter('withinHour'));
        setSelectedOption('withinHour');
    }, []);


    const handleButtonClick = (option) => {
        setResult(TimeFilter(option));
        setSelectedOption(option);
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
                                        <div className="top_menu">
                                            <div className="big_period_group">
                                                <div className="period_group">
                                                    <button className={selectedOption === 'withinHour' ? 'p_active' : 'period'}
                                                        onClick={() => handleButtonClick('withinHour')}>Час</button>
                                                    <button className={selectedOption === 'today' ? 'p_active' : 'period'}
                                                        onClick={() => handleButtonClick('today')}>Сегодня</button>
                                                    <button className={selectedOption === 'yesterday' ? 'p_active' : 'period'}
                                                        onClick={() => handleButtonClick('yesterday')}>Вчера</button>
                                                </div>
                                            </div>
                                        </div >
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
                                <Cards itemValue={result} />
                            </>
                        )}
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
};


export default CollapseMenu;