import json from "./jsonConsole.json";
import 'moment-timezone';

var cardList = json.data.alerts;

// фильтрация данных по периодам
function TimeFilter(filterOption) {
    const sortData = [];
    const now = new Date().getTime()/ 1000;
    const oneHourAgo = now - 3600;
    const today = new Date().setHours(0, 0, 0, 0) / 1000;
    const yesterday = today - 86400;
    const oneWeekAgo = today - 604800;
    const oneMonthAgo = today - 2592000;

    cardList.forEach((item) => {
        if (filterOption === 'withinHour' && item.time_value > oneHourAgo) {
            sortData.push(item);
        } else if (filterOption === 'today' && item.time_value > today) {
            sortData.push(item);
        } else if (filterOption === 'yesterday' && item.time_value > yesterday && item.time_value < today) {
            sortData.push(item);
        } else if (filterOption === 'week' && item.time_value > oneWeekAgo) {
            sortData.push(item);
        } else if (filterOption === 'month' && item.time_value > oneMonthAgo) {
            sortData.push(item);
        }
    });
    return sortData;
}

export default TimeFilter;