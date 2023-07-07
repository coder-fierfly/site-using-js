import React, { Component } from "react";
import json from "./jsonConsole.json";
import MatchMapping from "../MatshMapping";


var quotList = json.data.alerts;

var cardList = json.data.alerts;
const matrixArray = [];
// const TimeFilter = require('./TimeFilter.jsx');


const Cards = (props) => {



    // const filt = cardList.filter(item => item.state === 1);
    // return (

    // парсинг из json
    // <ui>
    {/* { */ }
    // cardList.filter(item => item.state === 1).map(item => {
    // quotList.map(item => { 
    // var currentDate = new Date();

    // console.error(item.time_value);
    // var col = matchMapping[props.itemValue.state].color;
    // // console.log((new Date(item.time_value * 1000)));
    // var convertDate = new Date(props.itemValue.time_value * 1000);
    // var cDateString = convertDate.toDateString();
    // const sd = new Date(props.itemValue.time_value * 1000);
    // const formattedDate = sd.toLocaleString('en-US', {
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric',
    //     hour12: false
    // }).replace(/\//g, '.').replace(/,/g, '');



    // cardList.map((s) => {


    return (
        <div>
            {props.itemValue.length === 0 ? (
                <div className="withoutColor">Нет подходящих элементов</div>
            ) : (
                props.itemValue.map((item) => {

                    var col = MatchMapping[item.state].color;
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

                    return (
                        <div className="card" id={item.event_id}   >
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
                                    <p className="item_5">{item.label}</p>
                                    <p className="item_4">{cDateString}</p>
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