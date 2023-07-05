import React, { useState } from 'react';

const TopMenu = () => {

    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    //todo обработка
    const processText = () => {
        console.log(inputText);
    };

    const placeholderText = 'Поиск';

    return (
        <div class="top_menu">
            <div class="big_period_group">
                <div class="period_group">
                    <div class="period">Час</div>
                    <div class="period">Сегодня</div>
                    <div class="period">Вчера</div>
                </div>

            </div>
        </div >
    );
};
export default TopMenu;