'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = 'фриланс';
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 150000;
let period = 3;

let start = function(){
    do{
        money = prompt('Ваш месячный доход?', 50000);
    }while(!isNumber(money));
};

start();


let showTypeOf = function(data){
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
                        'Квартплата, проездной, кредит');

console.log(addExpenses.toLowerCase().split(", "));


let expenses = [];

let getExpensesMonth = function(){
    let sum = 0;
    let amnt;

    for(let i = 0; i < 2; i++){

        expenses[i] = prompt('Введите обязательную статью расходов?', 'Интернет  Обеды');

        do{
            amnt = prompt('Во сколько это обойдется?');
        }while(!isNumber(amnt));
        sum += +amnt;
    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ', expensesAmount);


function getAccumulatedMonth (mny, exp){
    return mny - exp;
}

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);


let budgetDay = Math.floor(accumulatedMonth/30);
console.log('Бюджет на день: ' + budgetDay);


let getTargetMonth = function (mson, budgetMonth){
    return mson/budgetMonth;
};

let getTargetResult = getTargetMonth(mission, accumulatedMonth);

if(getTargetResult > 0){
    console.log('Цель будет достигнута за ' + Math.ceil(getTargetResult) + ' месяца');
}else if(getTargetResult < 0){
    console.log('Цель не будет достигнута!');
}

let getStatusIncome = function(){
    if(budgetDay > 1200){
        return('У вас высокий уровень дохода');
    }else if(budgetDay > 600 && budgetDay <= 1200){
        return('У вас средний уровень дохода');
    }else if(budgetDay >= 0 && budgetDay <= 600){
        return('К сожалению у вас уровень дохода ниже среднего');
    }else if(budgetDay < 0){
        return('Что то пошло не так');
    }
};

console.log(getStatusIncome());




