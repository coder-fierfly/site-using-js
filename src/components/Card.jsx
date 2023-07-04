import React from 'react';
// import matrixArray from './quor.js';
import Quor from './quor.js';


const Card = () => {
    // var matrixArray = require('./quor.js');
    return (


        <div class="card">
            <div class="line"></div>
            <div class="signal_color">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="text_group">

                {/* <ul>
                    {matrixArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul> */}
                <Quor />


                {/* <p class="item_1">{matr[0][0]}</p>
                
                <p class="item_2">{matrixArray[1][0]}</p>
                <p class="item_3">{matrixArray[2][0]}</p>
                <p class="item_4">{matrixArray[3][0]}</p> */}

                {/* <p class="item_1">1</p>
                <p class="item_2">2</p>
                <p class="item_3">3</p>
                <p class="item_4">4</p> */}
                {/* label" - c1,c2,c3,c4 */}
            </div>
        </div >
    );
};
export default Card;