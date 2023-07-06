import React, { Component } from "react";
import json from "./jsonConsole.json";


var quotList = json.data.alerts;

var cardList = json.data.alerts;
const matrixArray = [];
// const TimeFilter = require('./TimeFilter.jsx');

const matchMapping = {

    1: {
        color: "#38C25D",
        description: "Штатно"
    },
    2: {
        color: "#FFCA31",
        description: "Сигнализация"
    },
    3: {
        color: "#EA4335",
        description: "Риск аварии"
    },
    4: {
        color: "#AD2C72",
        description: "Критические события"
    },
    5: {
        color: "#858B99",
        description: "Нет данных"
    },
    6: {
        color: "#D9E2EC",
        description: ""
    },
    7: {
        color: "#4285F4",
        description: "Резерв"
    },
    0: {
        color: "#4285F4",
        description: "Резерв"
    }

};

const Cards = () => {



    // const filt = cardList.filter(item => item.state === 1);
    return (

        // парсинг из json
        <ui>
            {
                // cardList.filter(item => item.state === 1).map(item => {
                    quotList.map(item => { 
                    // var currentDate = new Date();

                    // console.error(item.time_value);
                    var col = matchMapping[item.state].color;
                    // console.log((new Date(item.time_value * 1000)));
                    var convertDate = new Date(item.time_value * 1000);
                    var cDateString = convertDate.toDateString();
                    const sd = new Date(item.time_value * 1000);
                    const formattedDate = sd.toLocaleString('en-US', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false
                    }).replace(/\//g, '.').replace(/,/g, '');



                    // cardList.map((s) => {
                    return (
                        <div className="card">
                                {/* <div className="color"> */}
                                <div className="board_line" style={{ background: col }}></div>
                                <div className="signal_color"  >
                                    <div className="circle" style={{ background: col }}></div>
                                    <div className="line" style={{ borderLeft: "1.5px dashed" + col }}></div>
                                </div>
                                {/* </div> */}
                                <div className="text_group">
                                    <div>
                                        <p className="item_1">{matchMapping[item.state].description}</p>
                                        <p className="item_2">{item.name}</p>
                                        <p className="item_3">{item.target_name}</p>
                                        <p className="item_5">{item.label}</p>
                                        <p class="item_4">{cDateString}</p>
                                    </div>
                                </div>
                            </div>

                    )
                })
            }
        </ui >)


    // <ui>
    //     {
    //         cardList.forEach(item => {
    //             const row = [
    //                 item.state,
    //                 item.name,
    //                 item.target_name,
    //                 item.time_value,
    //                 item.label
    //             ];
    //             matrixArray.push(row);
    //         })}
    //     <div>{matrixArray[0][0]}</div>
    //     <div>{matrixArray[0][1]}</div>
    // </ui>
    // )


}

export default Cards;