'use strict';

let num = 266219;
num = String(num);
let n = 1;

for(let i = 0; i < num.length; i++){
     n *= num[i];
}
console.log(n);

let m = n ** 3;
console.log(m);

m = String(m);
console.log(m.substring(0,2));