'use strict';

let today = new Date(), // текущая дата
    options = {weekday: 'long'};

let weekDay = new Intl.DateTimeFormat('ru-RU', options).format(today);// день недели в словах
weekDay = weekDay[0].toUpperCase() + weekDay.slice(1);

let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let year = today.getFullYear();//год
let monthNum = today.getMonth();//месяц в цифрах
monthNum = month[monthNum];//месяц буквенно
let monthDay = today.getDate();//день месяца
let nowHours = today.getHours();//часы 
let nowMinutes = today.getMinutes();//минуты
let nowSeconds = today.getSeconds();//секунды

//выводим дату в документ
document.body.innerHTML = `Сегодня ${weekDay}, ${monthDay} ${monthNum} ${year} года, 
                            ${nowHours} час ${nowMinutes} минут ${nowSeconds} секунды`;