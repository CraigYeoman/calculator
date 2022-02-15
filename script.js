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

const buttons = document.querySelectorAll('btn')
const currentInput = document.getElementById('current-input')

let displayValue = ''

