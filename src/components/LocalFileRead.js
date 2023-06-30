import React, { Component } from 'react';
import jsonConsole from './components/jsonConsole.json';
function LocalFileRead() {

    return (
        <div>{
            jsonConsole.map((jsonConsole, i) => (
                <div className='ddd'>
                    <h1>{jsonConsole.data.isotz.event_id}</h1>
                    <p>{jsonConsole.data.isotz.target_name}</p>
                </div>
            ))
        }
        </div>
    );

}

export default LocalFileRead;