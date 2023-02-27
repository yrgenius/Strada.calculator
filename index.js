import { calculation } from "./calculation.js";
import { addResultElement } from "./view.js";

const ELEMENTS = {
    wrapper: document.querySelector('.wrapper:nth-child(2)'),
    inp1: document.querySelector('.inp1'),
    inp2: document.querySelector('.inp2'),
    button: document.querySelector('.button'),
    out: document.querySelector('.text'),
}

ELEMENTS.button.addEventListener('click', resultHandler);
ELEMENTS.wrapper.addEventListener('click', removeElement);

function resultHandler() {
    let value = calculation(ELEMENTS.inp1, ELEMENTS.inp2)
    ELEMENTS.out.textContent = value;
    addResultElement(value, ELEMENTS.wrapper);
}

function removeElement(e) {
    e.target.remove();
}

