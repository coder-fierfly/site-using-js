import json from "./jsonConsole.json";
import moment from 'moment';
import jstz from "jstz";
import 'moment-timezone';

var cardList = json.data.alerts;

// фильтрация данных по периодам
function TimeFilter(filterOption) {
    const currentDate = new Date();
    const timezoneOffsetInMinutes = currentDate.getTimezoneOffset();
    const unixTimeWithTimezone = Math.floor(currentDate.getTime() / 1000) - (timezoneOffsetInMinutes * 60);
    const sortData = [];
    var now = moment.unix(unixTimeWithTimezone);
    cardList.forEach((item) => {
        var event = moment.unix(item.time_value);
        if (filterOption === 'withinHour' && event.isAfter(now.subtract(60, 'minutes'))) {
            sortData.push(item);
        } else if (filterOption === 'today' && event.isSame(now, 'day')) {
            sortData.push(item);
        } else if (filterOption === 'yesterday' && event.isSame(now.subtract(1, 'day'), 'day')) {
            sortData.push(item);
        } else if (filterOption === 'week' && event.isAfter(now.subtract(1, 'week'))) {
            sortData.push(item);
        } else if (filterOption === 'month' && event.isAfter(now.subtract(1, 'month'))) {
            sortData.push(item);
        } else if (filterOption === 'year' && event.isAfter(now.subtract(1, 'year'))) {
            sortData.push(item);
        }
    });
    return sortData;
}

export default TimeFilter;