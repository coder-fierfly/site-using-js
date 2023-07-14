import React, { Component, useState } from "react";
import json from "./jsonConsole.json";
import MatchMapping from "../MatshMapping";


var quotList = json.data.alerts;

var cardList = json.data.alerts;
const matrixArray = [];


// чтобы страница не уезжала
//сделать основное меню расширяемым
// неделя
// месяц год    



const Cards = (props) => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [showPopupLink, setShowPopup] = useState(false);



    const [expandedElements, setExpandedElements] = useState([]);

    const toggleElement = (id) => {
        if (expandedElements.includes(id)) {
            setExpandedElements(expandedElements.filter((elementId) => elementId !== id));
        } else {
            setExpandedElements([...expandedElements, id]);
        }
    };





    const handleDivClick = (item) => {
        setSelectedItem(item);
    };

    const handleCloseClick = () => {
        setSelectedItem(null);
    };

    const handleLinkClick = () => {
        console.log('работаю')
        setShowPopup(true);
    };

    const handleCloseLinkClick = () => {
        setShowPopup(false);
    };


    const [isExpanded, setIsExpanded] = useState(false);

    // const handleClick = () => {
    //     setIsExpanded(!isExpanded);
    // };
    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleClick = (index) => {
        // Если элемент уже выбран, сбрасываем индекс в null
        if (selectedIndex === index) {
            setSelectedIndex(null);
        } else {
            // Иначе устанавливаем индекс в значение параметра
            setSelectedIndex(index);
        }
    };

    function timeConverter(time, interval) {
        const convertDate = new Date(time * 1000);
        if (interval === 'withinHour') {
            const currentTime = Date.now();
            var min = Math.floor((currentTime - time * 1000) / 60000);
            return min.toString() + ' мин назад';
        }

        if (interval === 'yesterday') {
            const formattedDate = convertDate.toLocaleString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            }).replace(/\//g, '.').replace(/,/g, '');
            return formattedDate.toString();
        }
        if (interval === 'today') {
            const formattedTime = convertDate.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            }).replace(/\//g, '.').replace(/,/g, '');
            return formattedTime.toString();
        }
    }


    return (
        <div>
            {props.itemValue.length === 0 ? (
                <div className="withoutColor">Нет подходящих элементов</div>
            ) : (
                props.itemValue.map((item) => {

                    var col = MatchMapping[item.state].color;
                    return (
                        <>
                            {/* onClick={() => handleDivClick(item)}     */}
                            <div className="card" key={item.event_id} >
                                <>
                                    { }
                                    <button className="close-button" onClick={() => handleClick(item.event_id)}>
                                        {selectedIndex === null ? (<div className="close_popup_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" /></svg>
                                        </div>) : (<div className="close_popup_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z" /></svg>
                                        </div>)}

                                    </button>
                                    <div className="board_line" style={{ background: col }}></div>
                                    <div className="signal_color"  >
                                        <div className="circle" style={{ background: col }}></div>
                                        <div className="line" style={{ borderLeft: "1.5px dashed" + col }}></div>
                                    </div>

                                    <div className="text_group">

                                        <p className="item_1">{MatchMapping[item.state].description}</p>
                                        {/* {(selectedIndex === item.event_id) ? (<div>he</div>) : (<div>asdasd</div>)} */}

                                        {(selectedIndex === item.event_id && item.name !== '') ?
                                            (<div className="container"><p><span className="title_element">Имя устройства:&nbsp;</span>
                                                <span className="item_element">{item.name}</span></p></div>) : (item.name === '' ? (null) : (<p className="item_2">{item.name}</p>))}

                                        {(selectedIndex === item.event_id && item.target_name !== '') ?
                                            (<div className="container"><p><span className="title_element">Имя целевого объекта:&nbsp;</span>
                                                <span className="item_element"><a href="#" onClick={handleLinkClick}>{item.target_name}</a></span></p></div>)
                                            : (item.target_name === "" ? (null) : (<p className="item_3">{item.target_name}</p>))}
                                        {(selectedIndex === item.event_id && item.alert_template !== '') ? (<div className="container"><p><span className="title_element">Шаблон сигнала:&nbsp;</span><span className="item_element">{item.alert_template}</span></p></div>) : (null)}

                                        {(selectedIndex === item.event_id && item.value.emp !== '') ? (<div className="container"><p><span className="title_element">Значение:&nbsp;</span><span className="item_element">{item.value} {item.units}</span></p></div>) : (null)}

                                        {(selectedIndex === item.event_id && item.label !== '') ?
                                            (<div className="container"><p><span className="title_element">Класс опасности:&nbsp;</span>
                                                <span className="item_element">{item.label}</span></p></div>) : (item.label === '' ? (null) : (<p className="item_5">Класс опасности: {item.label}</p>))}

                                        {(selectedIndex === item.event_id && item.time_value !== '') ?
                                            (<div className="container"><p><span className="title_element">Время:&nbsp;</span>
                                                <span className="item_element">{timeConverter(item.time_value, props.filter)}</span></p></div>) : (item.time_value === '' ? (null) : (<p className="item_4">{timeConverter(item.time_value, props.filter)}</p>))}
                                    </div>
                                </>

                            </div>
                        </>
                    )
                })
            )}

            {showPopupLink && (
                <div className="popup chart">
                    <button className="close-button" onClick={handleCloseLinkClick}>
                        <div className="close_popup_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                        </div>
                    </button>
                    <h2>График</h2>
                </div>
            )}

        </div>
    )
};


export default Cards;