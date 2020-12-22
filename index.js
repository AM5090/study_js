'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.querySelector('.income_add'),
    expensesPlus = document.querySelector('.expenses_add'),
    depositCheck = document.getElementById('deposit-check'),
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
    leftInput = leftData.querySelectorAll('input[type=text]'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');



const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


// Конструктор
class AppData {
    constructor(){
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
    }

    start() {
        this.budget = +salaryAmount.value;
    
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getInfoDeposit();
        this.getBudget();
        this.getTypeRange();
    
        this.showResult();
    }

    startBlock() {
        leftInput = leftData.querySelectorAll('input[type=text]');
        leftInput.forEach((item) => {
            item.disabled = true;
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
    }

    reset() {
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
    
        const allInput = document.querySelectorAll('input[type=text]');
        allInput.forEach((item) => {
            item.value = '';
        });
    
        periodSelect.value = 1;
        periodAmount.textContent = periodSelect.value;
    
        start.style.display = 'block';
        cancel.style.display = 'none';
    
        leftInput.forEach((item) => {
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
        depositCheck.checked = false;
        if(depositCheck.checked === false){
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositPercent.style.display = 'none';
        }
        depositBank.value = '';
    }

    showResult() {
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
    }

    addIncomeBlock() {
        const cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        
        const incomeTitle = cloneIncomeItem.querySelector('.income-title'),
            incomeAmount = cloneIncomeItem.querySelector('.income-amount');
            
        incomeTitle.value = '';
        incomeAmount.value = '';
    
        incomeItem = document.querySelectorAll('.income-items');
        leftInput = leftData.querySelectorAll('input[type=text]');
    
        if(incomeItem.length === 3){
            incomePlus.style.display = 'none';
        }
    }

    addExpensesBlock() {
        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    
        const expensesTitle = cloneExpensesItem.querySelector('.expenses-title'),
            expensesAmount = cloneExpensesItem.querySelector('.expenses-amount');
    
        expensesTitle.value = '';
        expensesAmount.value = '';
    
        expensesItems = document.querySelectorAll('.expenses-items');
        leftInput = leftData.querySelectorAll('input[type=text]');
    
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    }

    getExpenses() {
        expensesItems.forEach((item) => {
            const itemExpenses = item.querySelector('.expenses-title').value;
            const cachExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cachExpenses !== ''){
                this.expenses[itemExpenses] = +cachExpenses;
            }
        }, this);
    }

    getIncome() {        

        incomeItem.forEach((item) => {
            const itemIncome = item.querySelector('.income-title').value;
            const cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                this.income[itemIncome] = +cashIncome;
            }
        }, this);
    
        for (let key in this.income){
            this.incomeMonth += +this.income[key];
        }
    }

    getAddExpenses() { 
        //метод, из поля для ввода возможных расходов значение разбивает на массив
        //и вводит в массив appData.addExpenses
        const addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if(item !== ''){
                this.addExpenses.push(item);
            }
        }, this);
    }

    getAddIncome() {
        //метод получает значения из полей Возможный доход и записывает в массив appData.addIncome
        additionalIncomeItem.forEach((item) => {
            const itemValue = item.value.trim();
            if(itemValue !== ''){
                this.addIncome.push(itemValue);
            }
        }, this);
    }

    getExpensesMonth() {
        //вычисляем cумму расходов
        for(let key in this.expenses){
            this.expensesMonth += this.expenses[key];
        }
    }

    getBudget() {
        // вычесляем бюджет на месяц (все доходы - расходы) и бюджет на день
        const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);//расчет депозита
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
        this.budgetDay = Math.floor(this.budgetMonth/30);
    }

    getTargetMonth() {
        //метод рассчитывает срок достижения цели в месяцах
        return targetAmount.value/this.budgetMonth;
    
    }

    getStatusIncome() {
        if(this.budgetDay > 1200){
            return('У вас высокий уровень дохода');
        }else if(this.budgetDay > 600 && this.budgetDay <= 1200){
            return('У вас средний уровень дохода');
        }else if(this.budgetDay >= 0 && this.budgetDay <= 600){
            return('К сожалению у вас уровень дохода ниже среднего');
        }else if(this.budgetDay < 0){
            return('Что то пошло не так');
        }
    }

    calcPeriod() {
        return this.budgetMonth * periodSelect.value;
    }

    getTypeRange() {
        periodAmount.textContent = periodSelect.value;
    }

    getInfoDeposit(){
        if(this.deposit){
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    }

    changePercent(){
        const valueSelect = this.value;
        if(valueSelect === 'other'){
            depositPercent.style.display = 'inline-block';
            depositPercent.value = '';
            depositPercent.addEventListener('input', () => {
                if(!isNumber(depositPercent.value) || (depositPercent.value < 0 || depositPercent.value > 100)){
                    depositPercent.value = 0;
                    start.disabled = true;
                }else{
                    this.percentDeposit = depositPercent.value;
                }
            });
        }else{
            depositPercent.value = valueSelect;
        }
    }

    depositHandler() {
        if(depositCheck.checked) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change', this.changePercent);
        }else{
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositPercent.style.display = 'none';
            depositBank.value = '';
            depositAmount.value = '';
            depositPercent.value = '';
            this.deposit = false;
            depositBank.removeEventListener('change', this.changePercent);
        }
    }

    eventsListeners() {
        start.disabled = true;
        salaryAmount.addEventListener('input', () => {
            start.disabled = salaryAmount.value.trim() === '';
            salaryAmount.value = salaryAmount.value.replace(/\D/g, '');
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

        depositCheck.addEventListener('change', this.depositHandler.bind(this));

        document.addEventListener('input', event => {
            const target = event.target;
            if (target.matches('input[placeholder="Наименование"]') ||
                target.matches('input[placeholder="название"]')) {
                target.value = target.value.replace(/\d/g, '');
            } else if (target.matches('input[placeholder="Сумма"]')) {
                target.value = target.value.replace(/\D/g, '');
            }
        });
    }
}

const appData = new AppData();

appData.eventsListeners();