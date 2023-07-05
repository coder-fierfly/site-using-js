import React, { Component } from "react";
import json from "./jsonConsole.json";


var quotList = json.data.alerts;
const matrixArray = [];

const matchMapping = {
    1: {
        color: "yellow",
        description: "alarm"
    },
    2: {
        color: "blue",
        description: "escape"
    },
    // Add more mappings as needed
};

//   const digit = 1;
// const match = matchMapping[digit];
// console.log(match.color); // Output: "yellow"
// console.log(match.description); // Output: "alarm"

class Quor extends Component {


    render() {
        const filt = quotList.filter(item => item.state === 1);
        return (

            // парсинг из json
            <ui>
                {

                    quotList.filter(item => item.state === 1).map(item => {
                        // quotList.map((s) => {
                        return (
                            <div className="card">
                                <div className="line"></div>
                                <div className="signal_color">
                                    <div className="circle"></div>
                                    <div className="line"></div>
                                </div>
                                <div className="text_group">
                                    <div>
                                        {/* <div>hehe</div> */}
                                        {/* <div>{item.state}
                                    <div>{item.name}</div> */}
                                        <p className="item_1">{item.state}</p>
                                        <p className="item_2">{item.name}</p>
                                        <p className="item_3">{item.target_name}</p>
                                        {/* TODO сделать максимум 3 строки */}
                                        <p class="item_4">{item.time_value}</p>
                                        <p ></p>
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

// module.exports = matrixArray;

export default Quor;