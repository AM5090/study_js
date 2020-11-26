'use strict';

// === Задание №1

console.log('=== Задание №1');

let arr = ['123', '234', '3456', '456', '5678', '678', '4789'];

for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf('2') === 0 || arr[i].indexOf('4') === 0){
        console.log(arr[i]);
    }
}

// === Задание №2

console.log('=== Задание №2');

point:
for(let j = 2; j <= 100; j++){
    for(let y = 2; y < j; y++){
        if(j % y === 0){
            continue point;
        }
    }
    console.log(j + ' Делители этого числа: ' + 1 + ' и ' + j);
}