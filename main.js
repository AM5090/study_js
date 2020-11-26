'use strict';

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function game(){

    let count = 10;
    const randNum = Math.floor(Math.random() * 100 + 1);

    function guessNumber() {
        let yourNum = prompt('Угадай число от 1 до 100, количество попыток - ' + count);
        
        if(yourNum === null){
            alert('Игра окончена');
        }else{

            if(!isNumber(yourNum)){
                alert('Введи число!');
                guessNumber();
            }

            if(parseFloat(yourNum) > randNum) {
                count--;
                if(count > 0){
                    alert('Загаданное число меньше, осталось попыток ' + count);
                    guessNumber();
                }else if(count === 0){
                    let a = confirm('Попытки закончились, хотите сыграть еще?');
                    if(a){
                        game();
                    }else if(a === false){
                        alert('Игра окончена');
                    }
                }
            }else if(parseFloat(yourNum) < randNum) {
                count--;
                if(count > 0){
                    alert('Загаданное число больше, осталось попыток ' + count);
                    guessNumber();
                }else if(count === 0){
                    let b = confirm('Попытки закончились, хотите сыграть еще?');
                    if(b){
                        game();
                    }else if(b === false){
                        alert('Игра окончена');
                    }
                }
            }else if(parseFloat(yourNum) === randNum){
                let win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                if(win){
                    game();
                }else if(win === false){
                    alert('Игра окончена');
                }
            }
        }
    }
    guessNumber();
}

game();