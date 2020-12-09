'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.querySelector('.income_add'),
    expensesPlus = document.querySelector('.expenses_add'),
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
    periodAmount = document.querySelector('.period-amount'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesAmount = document.querySelector('.expenses-amount'),
    leftData = document.querySelector('.data'),
    leftInput = leftData.querySelectorAll('input[type=text]');
    

const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


// Конструктор
const AppData = function() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

};

AppData.prototype.start = function(){

    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.getTypeRange();

    this.showResult();
};

// ================

AppData.prototype.startBlock   = function(){
    leftInput = leftData.querySelectorAll('input[type=text]');
    leftInput.forEach(function(item){
        item.disabled = true;
    });
    start.style.display = 'none';
    cancel.style.display = 'block';
};
AppData.prototype.reset   = function(){
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

    let allInput = document.querySelectorAll('input[type=text]');
    allInput.forEach(function(item){
        item.value = '';
    });

    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;

    start.style.display = 'block';
    cancel.style.display = 'none';

    leftInput.forEach(function(item){
        item.disabled = false;
    });

    // убираем лишние поля "Дополнительный доход" и возвращаем кнопку
    if(incomeItem.length > 1){ 
        for(let i = incomeItem.length-1; i >= 1; i--){
            incomeItem[i].remove();
        }
        if(incomeItem.length === 3){
            incomePlus.style.display = 'block';
        }
    }

    // убираем лишние поля "Обязательные расходы" и возвращаем кнопку
    if(expensesItems.length > 1){ 
        for(let i = expensesItems.length-1; i >= 1; i--){
            expensesItems[i].remove();
        }
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'block';
        }
    }

    start.disabled = true;
};
AppData.prototype.showResult  = function(){
    //метод выводит в поля для результатов расчитанные значения за месяц, день и т.д.
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('input', () => {
        incomePeriodValue.value = this.budgetMonth * periodSelect.value;
    });
};
AppData.prototype.addIncomeBlock  = function(){
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    let incomeTitle = cloneIncomeItem.querySelector('.income-title'),
        incomeAmount = cloneIncomeItem.querySelector('.income-amount');
        
    incomeTitle.value = '';
    incomeAmount.value = '';

    incomeItem = document.querySelectorAll('.income-items');
    leftInput = leftData.querySelectorAll('input[type=text]');

    if(incomeItem.length === 3){
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.addExpensesBlock = function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

    let expensesTitle = cloneExpensesItem.querySelector('.expenses-title'),
        expensesAmount = cloneExpensesItem.querySelector('.expenses-amount');

    expensesTitle.value = '';
    expensesAmount.value = '';

    expensesItems = document.querySelectorAll('.expenses-items');
    leftInput = leftData.querySelectorAll('input[type=text]');

    if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
    }

};
AppData.prototype.getExpenses = function(){
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cachExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cachExpenses !== ''){
            this.expenses[itemExpenses] = +cachExpenses;
        }
    }, this);
};
AppData.prototype.getIncome = function(){        

    incomeItem.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
            this.income[itemIncome] = +cashIncome;
        }
    }, this);

    for (let key in this.income){
        this.incomeMonth += +this.income[key];
    }
};
AppData.prototype.getAddExpenses = function(){ 
    //метод, из поля для ввода возможных расходов значение разбивает на массив
    //и вводит в массив appData.addExpenses
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            this.addExpenses.push(item);
        }
    }, this);
};
AppData.prototype.getAddIncome = function(){
    //метод получает значения из полей Возможный доход и записывает в массив appData.addIncome
    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            this.addIncome.push(itemValue);
        }
    }, this);
};
AppData.prototype.getExpensesMonth = function(){
    //вычисляем cумму расходов
    for(let key in this.expenses){
        this.expensesMonth += this.expenses[key];
    }
};
AppData.prototype.getBudget = function (){
    // вычесляем бюджет на месяц (все доходы - расходы) и бюджет на день
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth/30);
};
AppData.prototype.getTargetMonth = function (){
    //метод рассчитывает срок достижения цели в месяцах
    return targetAmount.value/this.budgetMonth;

};
AppData.prototype.getStatusIncome = function(){
    if(this.budgetDay > 1200){
        return('У вас высокий уровень дохода');
    }else if(this.budgetDay > 600 && this.budgetDay <= 1200){
        return('У вас средний уровень дохода');
    }else if(this.budgetDay >= 0 && this.budgetDay <= 600){
        return('К сожалению у вас уровень дохода ниже среднего');
    }else if(this.budgetDay < 0){
        return('Что то пошло не так');
    }
};
AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.getTypeRange = function(){
    periodAmount.textContent = periodSelect.value;
};
AppData.prototype.eventsListeners = function(){
    start.disabled = true;
    salaryAmount.addEventListener('input', function(){
        start.disabled = salaryAmount.value.trim() === '';
    });
    
    start.addEventListener('click', () => {
        this.start();
        this.startBlock();
    });
    cancel.addEventListener('click', () => {
        this.reset();
    });
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);
    periodSelect.addEventListener('input', this.getTypeRange);
};

const appData = new AppData();
console.log(appData);

appData.eventsListeners();
