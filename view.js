export function addResultElement(value, element) {
    let newElement = document.createElement('p');
    newElement.textContent = value;
    newElement.classList.add('result');
    element.append(newElement);
}

function removeElement(e) {
    e.target.remove();
}