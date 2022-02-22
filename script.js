const operate = function(x, a, b) {
    switch (x) {
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);  
    }
}

const add = function(a, b) {
    return Number(a) + Number(b)
}

const substract = function(a, b) {
    return Number(a) - Number(b)
}

const multiply = function(a, b) {
    return Number(a) * Number(b)
}

const divide = function(a, b) {
    return Number(a) / Number(b)
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');

const userInput = document.getElementById('user-input')
const pastInput = document.getElementById('past-input')

let displayValue = '';
let pastDisplayValue = '';
let operator = '';
let answer = '?';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === '+' || button.id === '-'
         || button.id === '*' || button.id === '/') {
            
            check2();
        } else if (button.id === '1' || button.id === '2' || button.id === '3' || 
         button.id === '4' || button.id === '5' || button.id === '6' || 
         button.id === '7' || button.id === '8' || button.id === '9' || 
         button.id === '0' || button.id === '.') {
            check();
            displayValue += button.id;
            userInput.textContent = displayValue;
        } else if (button.id === 'clear') {
            displayValue = "";
            pastDisplayValue = "";
            userInput.textContent = "";
            pastInput.textContent = "";
        } else if (button.id === 'delete') {
            displayValue = "";
            userInput.textContent = "";
        } else if (button.id = '=') {
            equals()
        }
    })
})

const check = function() {
    if (displayValue === answer) {
        pastDisplayValue = displayValue;
        pastInput.textContent = pastDisplayValue
        displayValue = ''
    }
}

const check2 = function() {
    if (!(pastDisplayValue === "") && !(operator === "") && !(displayValue === "")) {
        equals();
        //(pastDisplayValue === answer) {
        //pastInput.textContent = pastDisplayValue + ' ' + operator;
    } else {
        operator = button.id;
        pastDisplayValue = displayValue;
        pastInput.textContent = pastDisplayValue + ' ' + operator;
        userInput.textContent = "";
        displayValue = '';
    }
}

const equals = function() {
    answer = operate(operator, pastDisplayValue, displayValue);
            userInput.textContent = answer;
            pastInput.textContent = pastDisplayValue + ' ' + operator + ' ' + displayValue;
            displayValue = answer
}