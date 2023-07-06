import Card from "./Cards";
import json from "./jsonConsole.json";
var cardList = json.data.alerts;
function TimeFilter(filterOption) {
    const currentTime = Date.now();
    const filteredData = cardList.map((item) => {
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
            console.log(item);
            // return (
            //     <div>
            //         <Card itemValue={item} />
            //     </div>
            // );
            return item;

        } else if (filterOption === 'today' && transmittedDate >= startOfToday && transmittedDate <= endOfToday) {
            console.log(item);
            // return (
            //     <div>
            //         <Card itemValue={item} />
            //     </div>
            // );
        } else if (filterOption === 'yesterday' && transmittedDate >= startOfYesterday && transmittedDate <= endOfYesterday) {
            console.log(item);
            // return (

            //     Card(item)

            // );
        }

        // return false;

    });
}

// Example usage

// module.exports = TimeFilter;
export default TimeFilter;