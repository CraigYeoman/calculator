const operate = function(x, a, b) {
    switch (x) {
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "x":
            return multiply(a,b);
        case "/":
            return divide(a,b);  
    }
}

const add = function(a, b) {
    return a + b
}

const substract = function(a, b) {
    return a - b
}

const multiply = function(a, b) {
    return a * b
}

const divide = function(a, b) {
    return a / b
}

const buttons = document.querySelectorAll('button')
const userInput = document.getElementById('user-input')
const pastInput = document.getElementById('past-input')

let displayValue = '';
let pastDisplayValue = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === '+' || button.id === '-'
         || button.id === '*' || button.id === '/') {
             let operator = button.id
             operations(pastDisplayValue, displayValue, operator);
            
             //pastDisplayValue = displayValue;
             //pastInput.textContent = pastDisplayValue;
             //displayValue = "";
            // userInput.textContent = "";
            // console.log(pastDisplayValue);
        } else if (button.id === '1' || button.id === '2' || button.id === '3' || 
         button.id === '4' || button.id === '5' || button.id === '6' || 
         button.id === '7' || button.id === '8' || button.id === '9' || 
         button.id === '0' || button.id === '.') {
             userInput.textContent += button.id;
             displayValue +=button.id;
        }

    })
})

const operations = function(pastDisplayValue, displayValue, operator) {
    if (pastInput.textContent === '') {
        pastDisplayValue = displayValue;
        pastInput.textContent = pastDisplayValue;
        displayValue = "";
        userInput.textContent = "";
    } else {
        let answer = operate(operator, pastInput.textContent, userInput.textContent);
        pastInput.textContent = 
        userInput.textContent = answer
    }
}