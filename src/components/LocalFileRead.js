// import React, { Component } from 'react';

// function LocalFileRead() {

//     fetch('./jsonConsole.json') // Replace "data.json" with the path to your JSON file
//         .then(response => response.json())
//         .then(data => {
//             // Access the elements in the JSON and output to the browser
//             const outputDiv = document.getElementById('output');
//             outputDiv.innerHTML = `<p>Name: ${data.data.alerts.target_path}</p>
//                                  <p>Age: ${data.data.alerts.target}</p>`;

//             // Example: Output data from an array in the JSON object
//             data.items.forEach(item => {
//                 outputDiv.innerHTML += `<p>Item: ${data.data.alerts.target}</p>`;
//             });
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });

//     // return (
//     //     <div>{
//     //         jsonConsole.map((jsonConsole, i) => (
//     //             <div className='ddd'>
//     //                 <h1>{jsonConsole.data.isotz.event_id}</h1>
//     //                 <p>{jsonConsole.data.isotz.target_name}</p>
//     //             </div>
//     //         ))
//     //     }
//     //     </div>
//     // );

// }

// export default LocalFileRead;

// window.addEventListener('DOMContentLoaded', () => {
//     // Fetch the JSON file
//     fetch('./jsonConsole.json')
//         .then(response => response.json())
//         .then(data => {
//             // Access the JSON data
//             const name = data.data.alerts.target_path;
//             const age = data.data.alerts.target;

//             // Output the data to the HTML file
//             const outputElement = document.getElementById('output');
//             outputElement.innerHTML = `Name: ${name}<br>Age: ${age}<br>`;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });
function readJSON(callback) {
    fetch('./jsonConsole.json')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}