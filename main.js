'use strict';

const div1 = document.createElement('div');
const div2 = document.createElement('div');


const interval = () => {
    
    let today = new Date(); // текущая дата  2020, 11, 19, 22, 34, 51
    let options = {weekday: 'long'};

    let weekDay = new Intl.DateTimeFormat('ru-RU', options).format(today);// день недели в словах
    weekDay = weekDay[0].toUpperCase() + weekDay.slice(1);

    let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    let year = today.getFullYear();//год
    let monthNum = today.getMonth();//месяц в цифрах
    let monthChar = month[monthNum];//месяц буквенно
    let monthDay = today.getDate();//день месяца
    let nowHours = today.getHours();//часы 
    let nowMinutes = today.getMinutes();//минуты
    let nowSeconds = today.getSeconds();//секунды

    const declineHours = (hours) => {

        if ((nowHours >= 2 && nowHours < 5) || nowHours === 22 || nowHours === 23) {
            hours = `${hours}а`;
        } else if ((nowHours >= 5 && nowHours < 21) || nowHours === 0) {
            hours = `${hours}ов`;
        } else if (nowHours === 21) {
            hours = 'час';
        }

        return hours;
    };

    const declineMinSec = (nowTime, varMinSec) => {

        if (nowTime === 1 || 
            nowTime === 21 || 
            nowTime === 31 || 
            nowTime === 41 || 
            nowTime === 51) {
                varMinSec = `${varMinSec}а`;
        } else if ((nowTime >= 2 && nowTime < 5) || 
                    (nowTime >= 22 && nowTime < 25) || 
                    (nowTime >= 32 && nowTime < 35) || 
                    (nowTime >= 42 && nowTime < 45) || 
                    (nowTime >= 52 && nowTime < 55)) {
                varMinSec = `${varMinSec}ы`;
        } else if ((nowTime >= 5 && nowTime < 21) || 
                    (nowTime >= 25 && nowTime < 31) || 
                    (nowTime >= 35 && nowTime < 41) || 
                    (nowTime >= 45 && nowTime < 51) || 
                    (nowTime >= 55 && nowTime < 60) || 
                    nowTime === 0) {
                        varMinSec = varMinSec;
        }

        return varMinSec;
    };

    //выводим дату в документ
    div1.innerHTML = `Сегодня ${weekDay}, ${monthDay} ${monthChar} ${year} года, 
    ${nowHours} ${declineHours('час')} ${nowMinutes} ${declineMinSec(nowMinutes, 'минут')} 
    ${nowSeconds} ${declineMinSec(nowSeconds, 'секунд')}`;

    document.body.append(div1);

    const addZero = (variable) => {
        variable = variable.toString();

        if (variable.length === 1) {
            variable = `0${variable}`;
        }

        return variable;
    };


    div2.innerHTML = `${addZero(monthDay)}:${addZero(monthNum+1)}:${year} - 
    ${addZero(nowHours)}:${addZero(nowMinutes)}:${addZero(nowSeconds)}`;
    document.body.append(div2);

};

setInterval(interval, 1000);