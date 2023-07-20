function ColorTypeFilter(filterOption, result) {
  const sortData = [];
  console.log('ColorTypeFilter');
  //элемент из фильтра
  filterOption.forEach((element) => {
    //элемент из отфильтрованных данных
    result.forEach((item) => {
      //по цветам
      if (element.match(/^\d+$/)) {
        if (item.state == element) {
          sortData.push(item);
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
