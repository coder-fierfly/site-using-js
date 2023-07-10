import json from "./jsonConsole.json";
var cardList = json.data.alerts;
function TimeFilter(filterOption) {
    const sortData = [];
    const currentTime = Date.now();
    cardList.map((item) => {
        const transmittedDate = item.time_value * 1000;
        const timeDifference = currentTime - item.time_value;
        const startOfToday = new Date().setHours(0, 0, 0, 0);
        const endOfToday = new Date().setHours(23, 59, 59, 999);
        const startOfYesterday = new Date();
        startOfYesterday.setDate(startOfYesterday.getDate() - 1);
        startOfYesterday.setHours(0, 0, 0, 0);
        const endOfYesterday = new Date();
        endOfYesterday.setDate(endOfYesterday.getDate() - 1);
        endOfYesterday.setHours(23, 59, 59, 999);
        const startOfWithinAnHour = currentTime - 3600000;

        if (filterOption === 'withinHour' && transmittedDate >= startOfWithinAnHour && transmittedDate <= currentTime) {
            sortData.push(item);
        } else if (filterOption === 'today' && transmittedDate >= startOfToday && transmittedDate <= endOfToday) {
            sortData.push(item);
        } else if (filterOption === 'yesterday' && transmittedDate >= startOfYesterday && transmittedDate <= endOfYesterday) {
            sortData.push(item);
        }
    });

    return sortData;
}

export default TimeFilter;