import React, { Component } from "react";
import json from "./jsonConsole.json";


var quotList = json.data.alerts;
const matrixArray = [];
class Quor extends Component {

    render() {
        return (
            // парсинг из json
            // <ui>
            //     {
            //         quotList.map((s) => {
            //             return (
            //                 <div>
            //                     <div>{s.state}
            //                         <div>{s.name}</div>
            // <p class="item_1">{s.state}</p>
            // <p class="item_2">{s.name}</p>
            // <p class="item_3">{s.target_name}</p>
            // <p class="item_4">{s.time_value}</p>
            //                     </div>
            //                 </div>
            //             )
            //         })
            //     }
            // </ui>)


            <ui>
                {
                    quotList.forEach(item => {
                        const row = [
                            item.state,
                            item.name,
                            item.target_name,
                            item.time_value,
                            item.label
                        ];
                        matrixArray.push(row);
                    })}
                <div>{matrixArray[0][0]}</div>
                <div>{matrixArray[0][1]}</div>
            </ui>
        )

    }
}

// module.exports = matrixArray;

export default Quor;