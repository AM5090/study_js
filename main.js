'use strict';

const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
const start = function(){
    do{
        money = prompt('Ваш месячный доход?', 50000);
    }while(!isNumber(money));
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 150000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
                        'Квартплата, проездной, кредит');
            appData.addExpenses = addExpenses.toLowerCase().split(", ");
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

            let expenses = [];
            let amnt;

        for(let i = 0; i < 2; i++){

            expenses[i] = prompt('Введите обязательную статью расходов?', 'Интернет  Обеды');
             
            do{
                amnt = prompt('Во сколько это обойдется?');
            }while(!isNumber(amnt));
            appData.expenses[expenses[i]] = +amnt;
        }
    },
    getExpensesMonth: function(){
        //вычисляем cумму расходов

        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function (){
        // вычесляем бюджет на месяц (доходы - расходы) и бюджет на день
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },
    getTargetMonth: function (){
        let getTargetResult = appData.mission/appData.budgetMonth;

        if(getTargetResult > 0){
            return('Цель будет достигнута за ' + Math.ceil(getTargetResult) + ' месяца');
        }else if(getTargetResult < 0){
            return('Цель не будет достигнута!');
        }
    },
    getStatusIncome: function(){
        if(appData.budgetDay > 1200){
            return('У вас высокий уровень дохода');
        }else if(appData.budgetDay > 600 && appData.budgetDay <= 1200){
            return('У вас средний уровень дохода');
        }else if(appData.budgetDay >= 0 && appData.budgetDay <= 600){
            return('К сожалению у вас уровень дохода ниже среднего');
        }else if(appData.budgetDay < 0){
            return('Что то пошло не так');
        }
    },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

console.log('\n\tНаша программа включает в себя:');
for(let key in appData){
    console.log(key, appData[key]);
}