import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notNumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const showAlertError = notNumber(weight) || notNumber(height);

    if (showAlertError) {
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = calculateIMC(weight, height);
    displayResultMessage(result);
}

function displayResultMessage(result) {
    const message = `Your IMC is ${result}`;
    Modal.message.innerText = message;
    Modal.open();
}

