import React, { Component } from "react";
import json from "./jsonConsole.json";
import "./App.css";

var quotList = json.data.alerts;
class Quor extends Component {
    render() {
        return (
            <ui>
                {
                    quotList.map((s) => {
                        return (
                            <div>
                                <div>
                                    <div>{s.alert_id}</div>
                                    <div>{s.event_serial}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </ui>
        )
    }
}

export default Quor;