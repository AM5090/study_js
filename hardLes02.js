'use strict';

let num = 266219;
num = String(num);
let n = 1;

for(let i = 0; i < num.length; i++){
     n *= num[i];
}

let m = n ** 3;

m = String(m);
console.log(m.substring(0,2));