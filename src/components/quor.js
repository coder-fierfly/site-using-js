import React, { Component } from "react";
import json from "./jsonConsole.json";


var quotList = json.data.alerts;
const matrixArray = [];

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

class Quor extends Component {


    render() {
        const filt = quotList.filter(item => item.state === 1);
        return (

            // парсинг из json
            <ui>
                {

                    // quotList.filter(item => item.state === 1).map(item => {
                    quotList.map(item => {

                        console.error(item.time_value);
                        var col = matchMapping[item.state].color;
                        // var time = Date(item.time_value * 1000).toString();
                        console.log((new Date(item.time_value * 1000)));
                        var asd = new Date(item.time_value * 1000);
                        var as = asd.toDateString();

                        // document.write("hehe " +col);
                        // quotList.map((s) => {
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
                                        {/* TODO сделать максимум 3 строки */}
                                        <p className="item_5">{item.label}</p>
                                        <p class="item_4">{as}</p>

                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </ui >)


        // <ui>
        //     {
        //         quotList.forEach(item => {
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
}

export default Quor;