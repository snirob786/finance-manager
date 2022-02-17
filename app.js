
//Function definition section
//negative error handler
function errorNegative(amount){
    if (amount<0){
        return true;
    }else {
        return false;
    }
}

//not number error handler
function errorNan(amount){
    if (isNaN(amount)){
        return true;
    }else {
        return false;
    }
}

//error message display function
function errorDisplay(errorMessage,idPreFix, errorCount){
    let displayField = document.getElementById(idPreFix+'-error-message');
    displayField.innerText = errorMessage;
    if (errorCount >0 ){
        displayField.classList.add('error-show');
        displayField.classList.remove('error-hide');
    }
    else if(errorCount === 0 && idPreFix === 'save-neg'){
        displayField.classList.add('error-show');
        displayField.classList.remove('error-hide');
    }
    else {
        displayField.classList.add('error-hide');
        displayField.classList.remove('error-show');
    }
}

//total income Calculation
function totalIncome(){
    return parseInt(document.getElementById('income-input').value);
}

//total Expense Calculation

function totalExpense(){
    let foodAmount = parseInt(document.getElementById('food-exp-input').value);
    let rentAmount = parseInt(document.getElementById('rent-exp-input').value);
    let clotheAmount = parseInt(document.getElementById('clothes-exp-input').value);
    return foodAmount+rentAmount+clotheAmount;
}

//total Balance calculation
function totalBalance(){
    return  currentBalance = totalIncome() - totalExpense();
}

//Remain Amount calculator
function remainAmount(saveAmount){
    return totalBalance()- saveAmount;
}

// Calculator click event
let calculatorBtn = document.getElementById('calculate-btn');
calculatorBtn.addEventListener('click',function () {
    let errorNegMessage = 'Error: ';
    let errorNanMessage = 'Error: ';
    let errorNegCounter = 0;
    let errorNanCounter = 0;
    let incomeInputField = document.getElementById('income-input');
    let foodInputField = document.getElementById('food-exp-input');
    let rentInputField = document.getElementById('rent-exp-input');
    let clotheInputField = document.getElementById('clothes-exp-input');
    let totalExpenseField = document.getElementById('total-expense');
    let totalBalanceField = document.getElementById('total-balance');

    //Income input field error handler
    if(errorNegative(incomeInputField.value)){
        errorNegMessage += 'Input, ';
        errorNegCounter++;
    }else if(errorNan(incomeInputField.value)){
        errorNanMessage += 'Input, ';
        errorNanCounter++;
    }

    //Food input field error handler
    if(errorNegative(foodInputField.value)){
        errorNegMessage += 'Food, ';
        errorNegCounter++;
    }else if(errorNan(foodInputField.value)){
        errorNanMessage += 'Food, ';
        errorNanCounter++;
    }

    //Rent input field error handler
    if(errorNegative(rentInputField.value)){
        errorNegMessage += 'Rent, ';
        errorNegCounter++;
    }else if(errorNan(rentInputField.value)){
        errorNanMessage += 'Rent, ';
        errorNanCounter++;
    }

    //Clothes input field error handler
    if(errorNegative(clotheInputField.value)){
        errorNegMessage += 'Clothes, ';
        errorNegCounter++;
    }else if(errorNan(clotheInputField.value)){
        errorNanMessage += 'Clothes, ';
        errorNanCounter++;
    }

    errorNegMessage += 'are can not be negative';
    errorNanMessage += 'are must be number';


    errorDisplay(errorNegMessage, 'neg', errorNegCounter);
    errorDisplay(errorNanMessage, 'nan', errorNanCounter);

    if (errorNegCounter <= 0 && errorNanCounter <= 0){
        if (totalBalance() < 0){
            errorDisplay('Expense is more than income','neg',1)
        }
        totalExpenseField.innerText = totalExpense();
        totalBalanceField.innerText = totalBalance();
    }
})

//save button click event

let saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click',function () {
    let errorNegCounter = 0;
    let errorNanCounter = 0;
    let errorMessage = 'Error: ';
    let saveInputField = document.getElementById('save-input');
    let savingAmountField = document.getElementById('save-amount');
    let reaminAmountField = document.getElementById('remain-amount');
    let saveAmount = (parseInt(saveInputField.value)/100)*totalIncome();
    if (saveInputField.value < 0){
        errorMessage += 'Save field can not be negative.'
        errorNegCounter++;
    }else if(isNaN(saveInputField.value)){
        errorMessage += 'Save field must be a number.'
        errorNanCounter++;
    }

    if (errorNegCounter > 0 || errorNanCounter > 0){
        errorDisplay(errorMessage,'save-neg',0)
    }else{
        if (remainAmount(saveAmount) < 0){
            errorDisplay('Expense is more than income','save-neg',1)
        }
        savingAmountField.innerText = saveAmount;
        reaminAmountField.innerText = remainAmount(saveAmount);
    }
})

