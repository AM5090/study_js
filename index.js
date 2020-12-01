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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 150000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){

        let itemIncome,
            cashIncome,
            addExpenses;

        if(confirm('Есть ли у Вас дополнительный источник заработка?')){
            
            do{
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            }while(isNumber(itemIncome) || itemIncome === null || itemIncome.trim() === '');
            do{
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }while(!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }

        do{
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
                        'Квартплата, проездной, кредит');
        }while(isNumber(addExpenses) || addExpenses === null || addExpenses.trim() === '');
            appData.addExpenses = addExpenses.toLowerCase().split(", ");
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

            let expenses = [];
            let amnt;

        for(let i = 0; i < 2; i++){

            do{
                expenses[i] = prompt('Введите обязательную статью расходов?', 'Интернет  Обеды');
            }while(isNumber(expenses[i]) || expenses[i] === null || expenses[i].trim() === ''); 

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
    getInfoDeposit: function(){
    if(appData.deposit){
        do{
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
        }while(!isNumber(appData.percentDeposit));
        
        do{
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }while(!isNumber(appData.moneyDeposit));
    }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
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

let strArr = [];

for(let item of appData.addExpenses){
    strArr.push(item[0].toUpperCase() + item.slice(1));
}

console.log(strArr.join(', '));