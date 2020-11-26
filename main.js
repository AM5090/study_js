'use strict';

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const randNum = Math.floor(Math.random() * 100 + 1);

function guessNumber(rand) {
    let yourNum = prompt('Угадай число от 1 до 100');
    
    if(yourNum === null){
        alert('Игра окончена');
    }else{

        if(!isNumber(yourNum)){
            alert('Введи число!');
            guessNumber(randNum);
        }

        if(parseFloat(yourNum) > rand) {
            alert('Загаданное число меньше');
            guessNumber(randNum);
        }else if(parseFloat(yourNum) < rand) {
            alert('Загаданное число больше');
            guessNumber(randNum);
        }else if(parseFloat(yourNum) === rand){
            alert('Поздравляю, Вы угадали!!!');
        }
    }
}

guessNumber(randNum);