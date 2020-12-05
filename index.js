'use strict';

let start = document.getElementById('start'),
    incomePlus = document.querySelector('.income_add'),
    expensesPlus = document.querySelector('.expenses_add'),//+
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('input.income-title'),
    expensesTitle = document.querySelector('input.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    incomeItem = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount');



const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function(){

        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.getTypeRange();

        appData.showResult();

    },
    showResult: function(){
        //метод выводит в поля для результатов расчитанные значения за месяц, день и т.д.
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('input', function(){
            incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
        });
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItem = document.querySelectorAll('.income-items');

        if(incomeItem.length === 3){
            incomePlus.style.display = 'none';
        }
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }

    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cachExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cachExpenses !== ''){
                appData.expenses[itemExpenses] = +cachExpenses;
            }
        });
    },
    getIncome: function(){

        incomeItem.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = +cashIncome;
            }
        });

        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
    },
    getAddExpenses: function(){ 
        //метод, из поля для ввода возможных расходов значение разбивает на массив
        //и вводит в массив appData.addExpenses
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        //метод получает значения из полей Возможный доход и записывает в массив appData.addIncome
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function(){
        //вычисляем cумму расходов
        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function (){
        // вычесляем бюджет на месяц (все доходы - расходы) и бюджет на день
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },
    getTargetMonth: function (){
        //метод рассчитывает срок достижения цели в месяцах
        return targetAmount.value/appData.budgetMonth;

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
    calcPeriod: function(){
        return appData.budgetMonth * periodSelect.value;
    },
    getTypeRange: function(){
        periodAmount.textContent = periodSelect.value;
    }
};//appData


start.disabled = true;
salaryAmount.addEventListener('input', function(event){
    start.disabled = salaryAmount.value.trim() === '';
});

start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getTypeRange);
