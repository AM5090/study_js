'use strict';

const date = new Date();//2020, 11, 15, 3, 30
const options = { weekday: 'long'};
let weekDay = new Intl.DateTimeFormat('ru-RU', options).format(date);

function todayFunc(date) {
    let dayDiv = document.createElement('div');
    if (date.getHours() >= 6 && date.getHours() <= 12) {
        dayDiv.textContent = 'Доброе утро!';
        document.body.append(dayDiv);
    } else if (date.getHours() > 12 && date.getHours() < 18) {
        dayDiv.textContent = 'Добрый день!';
        document.body.append(dayDiv);
    } else if (date.getHours() >= 18 && date.getHours() < 23) {
        dayDiv.textContent = 'Добрый вечер!';
        document.body.append(dayDiv);
    } else if (date.getHours() >= 23 || date.getHours() < 6) {
        dayDiv.textContent = 'Доброй ночи!';
        document.body.append(dayDiv);
    }

    let toDayDiv = document.createElement('div');
    toDayDiv.textContent = `Сегодня: ${weekDay[0].toUpperCase() + weekDay.split(0)}`;
    document.body.append(toDayDiv);

    let timeDiv = document.createElement('div');
    timeDiv.textContent = `Текущее время: ${date.toLocaleTimeString('ru-RU', { hour12: true })}`;
    document.body.append(timeDiv);

    const newYear = new Date('31 december 2020').getTime(),
        dateTime = date.getTime(),
        timeRemaining = (newYear - dateTime) / 1000,
        daysLeft = Math.floor(timeRemaining / 60 / 60 / 24);

    let leftDiv = document.createElement('div');
    leftDiv.textContent = `До нового года осталось ${daysLeft} дней`;
    document.body.append(leftDiv);

}

todayFunc(date);