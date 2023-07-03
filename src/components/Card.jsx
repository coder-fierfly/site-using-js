import React, { useState } from 'react';

const Card = () => {
    return (
        <div class="card">
            <div class="line"></div>
            <div class="signal_color">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="text_group">
                <p class="item_1">Сигнализация</p>
                <p class="item_2">Установка</p>
                <p class="item_3">Содержание кислорода в дымовых газах</p>
                <p class="item_4">время</p>
            </div>
            <div class="code_mes">1452</div>
        </div>
    );
};
export default Card;