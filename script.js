const operate = function(x, a, b) {
    switch (x) {
        case "add":
            return add(a,b);
        case "substract":
            return substract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
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

let displayValue = ''

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userInput.textContent += button.id;
        displayValue += button.id;
        if (button.id === '+' || button.id === '-'
         || button.id === '*' || button.id === '/') {
             let b = displayValue;
             pastInput.textcontent = displayValue
             displayValue = ""
             console.log(b);
         }

    }
    
    
    )
})