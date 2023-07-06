import React, { useState, useEffect } from 'react';
// import TimeFilter from ('./TimeFilter.js');
import TimeFilter from "./TimeFilter";
import Cards from './Cards';


const TopMenu = () => {

    const [selectedOption, setSelectedOption] = useState(true);

    useEffect(() => {
        TimeFilter('withinHour');
        setSelectedOption('withinHour');
    }, []);


    const handleButtonClick = (option) => {
        TimeFilter(option)
        setSelectedOption(option);
    };

    return (
        
        <div className="top_menu">
            <div className="big_period_group">
                <div className="period_group">
                    <button className={selectedOption === 'withinHour' ? 'p_active' : 'period'}
                        onClick={() => handleButtonClick('withinHour')}>Час</button>
                    <button className={selectedOption === 'today' ? 'p_active' : 'period'}
                        onClick={() => handleButtonClick('today')}>Сегодня</button>
                    <button className={selectedOption === 'yesterday' ? 'p_active' : 'period'}
                        onClick={() => handleButtonClick('yesterday')}>Вчера</button>
                </div>
            </div>
            {/* <Cards dat={data} />; */}
        </div >
        
    );
};
export default TopMenu;