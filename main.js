'use strict';


// === Задание №1

console.log('=== Задание №1');

let lang = prompt('Выберите язык: ', 'ru или en');

while(lang !== 'ru' && lang !== 'en'){
    lang = prompt('Значение должно быть из предложенных: ', 'ru или en');
    if(lang === null) {
        break;
    }
}

let weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Птница', 'Суббота', 'Воскресенье'];
let weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// === Условные операторы

console.log('=== Условные операторы');

if(lang === 'ru'){
    for(let i = 0; i < weekRu.length; i++){
        console.log(weekRu[i]);
    }
}else if(lang === 'en'){
    for(let i = 0; i < weekEn.length; i++){
        console.log(weekEn[i]);
    }
}

// === Свитч кейс

console.log('=== switch case');

switch(lang){
    case 'ru':
        for(let i = 0; i < weekRu.length; i++){
            console.log(weekRu[i]);
        }
    break;
    case 'en':
        for(let i = 0; i < weekEn.length; i++){
            console.log(weekEn[i]);
        }
    break;
}

// ==== многомерный массив

console.log('=== Многомерный массив');

const allLeng = {
    'ru' : ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Птница', 'Суббота', 'Воскресенье'],
    'en' : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};

for(let i = 0; i < allLeng[lang].length; i++){
    console.log(allLeng[lang][i]);
}


// === Задание №2

console.log('\n === Задание №2');

let namePerson = prompt('Введите имя:', 'Артем');

let yourStatus = namePerson === 'Артем' ? console.log('Директор') : 
                 namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');
                 