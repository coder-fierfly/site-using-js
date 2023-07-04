// fetch('D:/doc/pr/my-app/src/jsonConsole.json')
//     .then(response => response.json())
//     .then(data => {
//         const outputDiv = document.getElementById('output');
//         const alerts = data.data.alerts;

//         let outputHTML = '<h1>Data from JSON file:</h1>';
//         outputHTML += '<ul>';
//         alerts.forEach((alert) => {
//             outputHTML += `<li>Value state: ${alert.value_state}</li>`;
//             outputHTML += `<li>Time state: ${alert.time_state}</li>`;
//         });
//         outputHTML += '</ul>';
//         outputDiv.innerHTML = outputHTML;
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

import json from 'jsonConsole.json';
console.log(json);