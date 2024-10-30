let currentInput = '';
let firstNumber = null;
let operator = null;
let expression = '';

const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('#calculator button'));

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            currentInput = '';
            firstNumber = null;
            operator = null;
            expression = '';

            updateDisplay('0');
        } else if (buttonText === '=') {
            if (firstNumber !== null && operator) {
                const secondNumber = parseFloat(currentInput);
                const result = operate(firstNumber, secondNumber, operator);
                updateDisplay(result.toString());

                currentInput = '';
                firstNumber = null;
                operator = null;
                expression = '';
            }
        } else if (['+', '-', '*', '/'].includes(buttonText)) {
            if (currentInput !== '') {
                if (firstNumber === null) {
                    firstNumber = parseFloat(currentInput);
                } else if (operator) {
                    const secondNumber = parseFloat(currentInput);
                    const result = operate(firstNumber, secondNumber, operator);
                    updateDisplay(result.toString());
                    firstNumber = result;
                }

                operator = buttonText;
            
                expression += currentInput + ' ' + operator + ' ';
                currentInput = '';
                updateDisplay(expression);
            }
        } else {
            currentInput += buttonText;
            updateDisplay(expression + currentInput);
        }
    });
});

function updateDisplay(value) {
    display.textContent = value;
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : 'Error: Division by zero');

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
}

function operate(num1, num2, operator) {
    const operation = operations[operator];
    if (operation) {
        return operation(num1, num2);
    } else {
        return 'Error: Invalid operator';
    }
}