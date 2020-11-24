'use strict';

let argument = prompt('Введите текстовые данные: ', '123');

function data(arg){

    while(!isNaN(arg)){
        arg = prompt('Введите текстовые данные: ', '    Lorem ipsum dolor sit amet, consectetur adipiscing elit   ');
        if(arg === null){break;}
    }

    arg = arg.trim();

    if(arg.length > 30){
        alert(arg.substr(0, 30) + '...');
    }
}

data(argument);