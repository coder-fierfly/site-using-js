import React, { Component } from "react";
import json from "./jsonConsole.json";
import MatchMapping from "../MatshMapping";


var quotList = json.data.alerts;

var cardList = json.data.alerts;
const matrixArray = [];
// const TimeFilter = require('./TimeFilter.jsx');



const Cards = (props) => {
    const currentTime = Date.now();
    console.log('cards')
    console.log(props.itemValue)
    return (
        <div>
            {props.itemValue.length === 0 ? (
                <div className="withoutColor">Нет подходящих элементов</div>
            ) : (
                props.itemValue.map((item) => {
                    var col = MatchMapping[item.state].color;
                    var minutesAgo = Math.floor((currentTime - item.time_value * 1000) / 60000);
                    const cd = new Date(item.time_value * 1000);
                    const formattedDate = cd.toLocaleString('en-US', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false
                    }).replace(/\//g, '.').replace(/,/g, '');

                    const formattedTime = cd.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false
                    }).replace(/\//g, '.').replace(/,/g, '');

                    return (
                        <div className="card" key={item.event_id}   >
                            {/* <div className="color"> */}
                            <div className="board_line" style={{ background: col }}></div>
                            <div className="signal_color"  >
                                <div className="circle" style={{ background: col }}></div>
                                <div className="line" style={{ borderLeft: "1.5px dashed" + col }}></div>
                            </div>
                            {/* </div> */}
                            <div className="text_group">
                                <div>
                                    <p className="item_1">{MatchMapping[item.state].description}</p>
                                    <p className="item_2">{item.name}</p>
                                    <p className="item_3">{item.target_name}</p>
                                    <p className="item_5">Класс опасности: {item.label}</p>
                                    {props.filter === 'withinHour' ? (<p className="item_4">{minutesAgo}  мин назад</p>) : (null)}
                                    {props.filter === 'today' ? (<p className="item_4">{formattedTime}</p>) : (null)}
                                    {props.filter === 'yesterday' ? (<p className="item_4">{formattedDate}</p>) : (null)}
                                </div>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    );
}

export default Cards;