import json from "./jsonConsole.json";
import moment from 'moment';

var cardList = json.data.alerts;
function TimeFilter(filterOption) {
    const sortData = [];
    var now = moment();
    cardList.map((item) => {
        var event = moment.unix(item.time_value);
        if (filterOption === 'withinHour' && event.isAfter(now.subtract(1, 'hour'))) {
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