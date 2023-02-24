let wrapper = document.querySelector('.wrapper:nth-child(2)');
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let button = document.querySelector('.button');
let out = document.querySelector('.text');

button.addEventListener('click', () => calc(inp1, inp2));
wrapper.addEventListener('click', removeElement);

function calc(inp1, inp2) {
    let sing = getOperand();
    let a = inp1.value || 0;
    let b = inp2.value || 0;
    let result = 0;

    switch (sing) {
        case '+':
            result = sum(a, b);
            outValue(result);
            break;
        case '-':
            result = minus(a, b);
            outValue(result);
            break;
        case '*':
            result = multiply(a, b);
            outValue(result);
            break;
        case '/':
            result = divide(a, b);
            outValue(result);
            break;
    }

    addResult(result);

    function sum(a, b) {
        return +a + +b;
    }

    function minus(a, b) {
        return +a - +b;
    }

    function multiply(a, b) {
        return +a * +b;
    }

    function divide(a, b) {
        return (a == 0 || b == 0) ? 0 : (+a / +b).toFixed(3);
    }
}

function getOperand() {
    return document.querySelector('.select > option:checked').value;
}

function outValue(value) {
    out.textContent = value;
}

function addResult(value) {
    let element = document.createElement('p');
    element.textContent = value;
    element.classList.add('result');
    wrapper.append(element);
}

function removeElement(e) {
    e.target.remove();
}



