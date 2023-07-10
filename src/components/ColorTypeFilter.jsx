function ColorTypeFilter(filterOption, result) {
    const sortData = [];
    //элемент из фильтра
    filterOption.forEach(element => {
        //элемент из отфильтрованных данных
        result.map(item => {
            //по цветам
            if (element.match(/^\d+$/)) {
                if (item.state == element) {
                    sortData.push(item)
                }
                //по состоянию
            } else if (item.label === element) {
                sortData.push(item);
            }
        });
    });
    const uniqueValuesSet = [...new Set(sortData)];
    return uniqueValuesSet;
}

export default ColorTypeFilter;