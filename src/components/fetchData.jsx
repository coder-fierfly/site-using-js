// Вспомогательная функция для эмуляции задержки при загрузке данных
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchData = (page, propToPass) => {
  // Эмулируем задержку запроса для имитации загрузки данных
  // Удалите эту строку в реальной реализации, если будете использовать реальный API
  // Эта строка задерживает запрос на 1 секунду (1000 мс)
  // В реальном проекте запрос к API займет реальное время для ответа сервера
  return delay(1000).then(() => {
    // Здесь выполняйте логику, чтобы получить данные из propToPass
    // В зависимости от выбранной опции и текущей страницы (page)
    // Вместо примера, который я привожу, вам нужно реализовать свою логику

    const pageSize = 10; // Количество элементов на странице
    const indexOfLastItem = page * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    
    // Здесь предполагается, что propToPass - это массив объектов
    // Предполагается также, что у вас есть некий механизм для фильтрации данных по выбранной опции
    const filteredData = propToPass.filter((item) => item.someProperty);

    // Возвращаем данные для текущей страницы
    return propToPass.slice(indexOfFirstItem, indexOfLastItem);
  });
};

export default fetchData;
