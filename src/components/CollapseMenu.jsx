import React, { useState, useEffect } from 'react';
import TimeFilter from "./TimeFilter";
import "rsuite/dist/rsuite.min.css";
import { Nav, Sidenav, Sidebar } from "rsuite";

import Cards from "./Cards";
import FilterPopup from './FilterPopup';
import ColorTypeFilter from './ColorTypeFilter';

import MatchMapping from "../MatshMapping";

// провезти линию медлу филттрами
// отформатировать дату
const CollapseMenu = () => {

    const cancelFilter = (index) => {
        var buffFilter = [];
        buffFilter = buffFilter.concat(selectedFilters);
        buffFilter.splice(index, 1);
        setSelectedFilters(buffFilter);
        // applyFilters();
        // setFilter(ColorTypeFilter(filters, result));
        // setSelectedFilters
        console.log('закрываем' + index)
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    // Отфильтрованные данные по цвету и типу
    const [filterData, setFilter] = useState([]);
    // Выбранные фильтры их потом надо будет отображать.
    const [selectedFilters, setSelectedFilters] = useState([]);
    var applyFilters = (filters) => {
        console.log('эть')
        setSelectedFilters(filters);
        setFilter(ColorTypeFilter(filters, result));
    };

    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    //todo обработка
    const processText = () => {
        console.log(inputText);
    };

    // Открытие и закрытие меню
    const [collapsed, setCollapsed] = useState(true);


    //Отфильтрованные данные по времени
    const [result, setResult] = useState([]);

    //Выбранная переменная
    const [selectedOption, setSelectedOption] = useState([]);

    useEffect(() => {
        setResult(TimeFilter('withinHour'));
        setSelectedOption('withinHour');
    }, []);


    //Срабатывание по кнопке
    const handleButtonClick = (option) => {
        console.log("время");
        setResult(TimeFilter(option));
        // setResult(TimeFilter(option));
        setSelectedOption(option);
        //TODO сделать перерисовку при применении фильтров
        // if (selectedFilters.length > 0) {
        //     // console.log('HEHE')
        //     // setFilter(ColorTypeFilter(filters, result));
        //     // setSelectedFilters(filters);
        //     // setFilter(ColorTypeFilter(filters, aaa));
        //     // setSelectedFilters(filters);

        // }
    };

    var propToPass = [];
    var groupedData = [];
    propToPass = propToPass.concat(result);
    if (selectedFilters.length > 0) {
        propToPass.length = 0;
        propToPass = propToPass.concat(filterData);

        for (let i = 0; i < selectedFilters.length; i += 4) {
            groupedData.push(selectedFilters.slice(i, i + 4));
        }
    }



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
                                <div className="top_menu">
                                    <div className="filter_group">
                                        <div className="search">
                                            <div className="search_group">
                                                <button className="loupe_btn" onClick={processText}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="search_svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z" fill="#93959A" />
                                                    </svg>
                                                </button>
                                                <div className="search_title"><input className="text_area"
                                                    type="text"
                                                    value={inputText}
                                                    placeholder={'Поиск'}
                                                    onChange={handleInputChange}
                                                /></div>
                                            </div>
                                        </div>
                                        <div className="filter_btn" onClick={openPopup}>
                                            {selectedFilters.length !== 0 ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="filter_svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5996 3H4.99986C4.77986 3 4.56986 3.08 4.37986 3.22C3.94986 3.56 3.86986 4.19 4.20986 4.62L9.96986 12H9.99986V17.87C9.95986 18.16 10.0599 18.47 10.2899 18.7L12.2999 20.71C12.6899 21.1 13.3199 21.1 13.7099 20.71C13.9399 20.5 14.0399 20.18 13.9999 19.88V12H14.0299L15.503 10.1126C13.9961 9.13152 12.9999 7.43211 12.9999 5.5C12.9999 4.59978 13.2162 3.75007 13.5996 3ZM16.0504 3C15.4021 3.63526 14.9999 4.52066 14.9999 5.5C14.9999 6.79177 15.6997 7.92009 16.7409 8.52653L19.7899 4.62C20.1299 4.19 20.0499 3.56 19.6199 3.22C19.4299 3.08 19.2199 3 18.9999 3H16.0504Z" fill="#93959A" />
                                                    <circle cx="18.5" cy="5.5" r="3.5" fill="#0079F7" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="filter_svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M13.9999 12V19.88C14.0399 20.18 13.9399 20.5 13.7099 20.71C13.3199 21.1 12.6899 21.1 12.2999 20.71L10.2899 18.7C10.0599 18.47 9.95986 18.16 9.99986 17.87V12H9.96986L4.20986 4.62C3.86986 4.19 3.94986 3.56 4.37986 3.22C4.56986 3.08 4.77986 3 4.99986 3H18.9999C19.2199 3 19.4299 3.08 19.6199 3.22C20.0499 3.56 20.1299 4.19 19.7899 4.62L14.0299 12H13.9999Z" fill="#93959A" />
                                                </svg>
                                            )}
                                        </div>
                                        {isPopupOpen && (
                                            <FilterPopup onClose={closePopup} onApply={applyFilters} selectedOptions={selectedFilters} />
                                        )}
                                    </div>
                                </div >
                                {selectedFilters.length !== 0 ? (
                                    <div>
                                        {groupedData.map((element, index) => {
                                            return (
                                                <div className="selected_filters">
                                                    {element.map((item, itemIndex) => (
                                                        <div className="box_filter" key={itemIndex}>
                                                            {item.match(/^\d+$/) ? (<div className="signal" style={{ background: MatchMapping[item].color }}></div>) :
                                                                <div className="signal" style={{ background: '#FFFFFF' }} > {item}</div>}
                                                            < button className='cancel_btn'
                                                                onClick={() => cancelFilter(itemIndex)}
                                                            >
                                                                <div className="cancel_div" >
                                                                    <div className="cancel_svg">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div >
                                                    ))}
                                                </div>
                                                // <SelectedFilter key={index} data={item} />
                                            )
                                        })
                                        }
                                    </div >
                                ) : (null)}

                                <Cards itemValue={propToPass} filter={selectedOption} />
                            </>
                        )}
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );

};

export default CollapseMenu;