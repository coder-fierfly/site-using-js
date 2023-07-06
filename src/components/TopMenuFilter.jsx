import React, { useState } from 'react';

const TopMenuFilter = () => {

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
        <div className="top_menu">

            <div className="filter_group">
                <div className="search">
                    <div className="search_group">
                        <button onClick={processText}><img className="loupe_btn" src="" /></button>
                        <div className="search_title"><input className="text_area"
                            type="text"
                            value={inputText}
                            placeholder={placeholderText}
                            onChange={handleInputChange}
                        /></div>
                    </div>
                </div>
                <div className="filter_btn">
                    <img className="filter_img" src="" />
                </div>
            </div>
        </div >
    );
};
export default TopMenuFilter;