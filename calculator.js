//Check out calculator_hints.js for hints if you're stuck
let result = 0;
let currentNumber = 0;
let currentSymbol = '';
const display = document.querySelector('.result-screen');

const handleNumber = num => {
    currentNumber = currentNumber * 10 + num;
    if (currentSymbol === '=') currentSymbol = '';
}

const handleOperation = symbol => {
    if (symbol === 'C' || symbol === '←') {
        // effects that quickly resolve
        switch (symbol) {
            case 'C':
                currentNumber = 0;
                currentSymbol = '';
                result = 0;
                break;
            case '←':
                currentNumber = Math.floor(currentNumber / 10);
                break;
        }
        return;
    }
    switch (currentSymbol) {
        // effects that resolve after clicking another one
        case '+':
            result += currentNumber;
            break;
        case 'x':
            result *= currentNumber;
            break;
        case '-':
            result -= currentNumber;
            break;
        case '÷':
            result /= currentNumber;
            break;
        case '':
            result = currentNumber;
            break;
    }
    currentSymbol = symbol;
    currentNumber = 0;
}

const render = () => {
    display.innerText = currentSymbol === '=' ? result : currentNumber;
}


const init = () => {
    // assign to buttons
    document.querySelectorAll('.buttons').forEach(element => {
        let parsedVal = parseInt(element.innerText);
        if (!isNaN(parsedVal)) {
            element.addEventListener('click', () => {
                handleNumber(parsedVal);
                render();
            });
        } else {
            element.addEventListener('click', () => {
                handleOperation(element.innerText);
                render();
            });
        }
    });

};

// initialize
init();