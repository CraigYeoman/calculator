//Variables
let displayValue = '';
let pastDisplayValue = '';
let operator = '';
let answer = '';

//QuerySelectors
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');

//Get ElementbyId
const userInput = document.getElementById('user-input');
const pastInput = document.getElementById('past-input');

//Functions
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

const equals = function() {
    answer = operate(operator, pastDisplayValue, displayValue);
            userInput.textContent = answer;
            pastInput.textContent = pastDisplayValue + ' ' + operator + ' ' + displayValue;
            pastDisplayValue = answer;
            displayValue = "";
};

//EventListeners
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(answer !== "") {
            pastInput.textContent = answer + " " + operator;
        }
        if (button.id === '.' && displayValue.includes('.')) return;
        displayValue += button.id;
        userInput.textContent = displayValue;
        console.log(displayValue);
    })
})

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(pastDisplayValue !== "") {
            equals();
            operator = button.id;
            return
        }
        operator = button.id;
        pastDisplayValue = displayValue;
        pastInput.textContent = pastDisplayValue + " " + operator;
        displayValue = "";
        userInput.textContent = "";
        console.log(operator);
    })
})

clearButton.addEventListener('click', () => {
    displayValue = "";
    pastDisplayValue = "";
    operator = "";
    answer = "";
    userInput.textContent = "";
    pastInput.textContent = "";
});

deleteButton.addEventListener('click', () => {
    displayValue = "";
    userInput.textContent = "";
});

equalsButton.addEventListener('click', () => {
    console.log(displayValue);
    equals();
});