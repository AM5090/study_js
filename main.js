'use strict';

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function game(){

    const randNum = Math.floor(Math.random() * 100 + 1);

    function guessNumber() {
        let yourNum = prompt('Угадай число от 1 до 100');
        
        if(yourNum === null){
            alert('Игра окончена');
        }else{

            if(!isNumber(yourNum)){
                alert('Введи число!');
                guessNumber();
            }

            if(parseFloat(yourNum) > randNum) {
                alert('Загаданное число меньше');
                guessNumber();
            }else if(parseFloat(yourNum) < randNum) {
                alert('Загаданное число больше');
                guessNumber();
            }else if(parseFloat(yourNum) === randNum){
                alert('Поздравляю, Вы угадали!!!');
            }
        }
    }
    guessNumber();

}

game();
