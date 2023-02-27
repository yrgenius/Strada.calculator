import { sum, minus, multiply, divide } from './operation.js';

export function calculation(inp1, inp2) {
    let sing = document.querySelector('.select > option:checked').value;
    let a = inp1.value || 0;
    let b = inp2.value || 0;

    switch (sing) {
        case '+':
            return sum(a, b);
        case '-':
            return minus(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}
