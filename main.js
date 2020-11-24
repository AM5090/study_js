'use strict';

let money = +prompt('Ваш месячный доход?', '50000');
let income = 'фриланс';
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 150000;
let period = 3;


let showTypeOf = function(data){
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
                        'Квартплата, проездной, кредит');

console.log(addExpenses.toLowerCase().split(", "));


let expenses1 = prompt('Введите обязательную статью расходов?', 'Интернет');
let amount1 = +prompt('Во сколько это обойдется?', '1000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'Обеды');
let amount2 = +prompt('Во сколько это обойдется?', '1500');

let getExpensesMonth = function(a, b){
    return a + b;
};

console.log('Расходы за месяц: ', getExpensesMonth(amount1, amount2));


function getAccumulatedMonth (mny, amt1, amt2){
    return mny - (amt1 + amt2);
}

let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);


let budgetDay = Math.floor(accumulatedMonth/30);
console.log('Бюджет на день: ' + budgetDay);


function getTargetMonth (mson, budgetMonth){
    return mson/budgetMonth;
}

console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth(mission, accumulatedMonth)) + ' месяца');


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




