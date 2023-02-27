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

export { sum, minus, multiply, divide };
