'use strict';

let money = +prompt('Ваш месячный доход?', '50000');
console.log(typeof money);

let income = 'фриланс';
console.log(typeof income);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
                        'Квартплата, проездной, кредит');
console.log(addExpenses.length);

let mission = 150000;
let period = 3;
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");

console.log(addExpenses.toLowerCase().split(", "));

alert('Привет мир');
console.log('Привет мир');

let expenses1 = prompt('Введите обязательную статью расходов?', 'Интернет');
let amount1 = +prompt('Во сколько это обойдется?', '1000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'Обеды');
let amount2 = +prompt('Во сколько это обойдется?', '1500');

let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц: ' + budgetMonth);

let budgetDay = Math.floor(budgetMonth/30);
console.log('Бюджет на день: ' + budgetDay);

console.log('Цель будет достигнута за ' + Math.ceil(mission/budgetMonth) + ' месяца');

if(budgetDay > 1200){
    console.log('У вас высокий уровень дохода');
}else if(budgetDay > 600 && budgetDay <= 1200){
    console.log('У вас средний уровень дохода');
}else if(budgetDay >= 0 && budgetDay <= 600){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}else if(budgetDay < 0){
    console.log('Что то пошло не так');
}