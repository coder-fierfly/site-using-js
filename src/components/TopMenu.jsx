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
                <div class="another_period_btn">
                    <img class="x24-arrow-right-7Cx" src="" />
                </div>
            </div>
            <div class="filter_group">
                <div class="search">
                    <div class="search_group">
                        <button onClick={processText}><img class="loupe_btn" src="" /></button>
                        <div class="search_title"><input className="text_area"
                            type="text"
                            value={inputText}
                            placeholder={placeholderText}
                            onChange={handleInputChange}
                        /></div>
                    </div>
                </div>
                <div class="filter_btn">
                    <img class="filter_img" src="" />
                </div>
            </div>
        </div >
    );
};
export default TopMenu;