class Calculator {
    constructor() {
        this.arryNumbers = document.querySelectorAll('.button');
        this.arryOperations = document.querySelectorAll('.operation');
        this.elementC = document.getElementById('IdC');
        this.elementResult = document.getElementById('IdResult');
        this.inputValue = document.getElementById('inputId');
        this.needClearResult = false;
        this.valueOperation = null;
        this.memoryInput1 = null;
        this.memoryInput2 = null;

        for (let i = 0; i < arryNumbers.length; i++) {
            arryNumbers[i].addEventListener('click', onArryNumbersClick);
        }
        for (let j = 0; j < arryOperations.length; j++) {
            arryOperations[j].addEventListener('click', onArryOperationsClick);
        }
    }



}

elementResult.addEventListener('click', onElementResultClick);

function onArryNumbersClick(e) {
    if (inputValue.value === '0') {
        inputValue.value = '';
    }
    if (inputValue.value !== '') {
        memoryInput1 = inputValue.value;
    }

    if (needClearResult) {
        inputValue.value = '';
    }
    if (inputValue.value === '') {
        memoryInput2 = memoryInput1;
    }

    inputValue.value += e.currentTarget.dataset.numeral;
    needClearResult = false;
}

function onArryOperationsClick(e) {
    needClearResult = true;
    valueOperation = e.currentTarget.dataset.operation;
}

function onElementResultClick() {
    var finalyResult = 0;
    switch (valueOperation) {
        case '+':
            finalyResult = Number(memoryInput2) + Number(inputValue.value);
            break;
        case '-':
            finalyResult = Number(memoryInput2) - Number(inputValue.value);
            break;
        case '*':
            finalyResult = Number(memoryInput2) * Number(inputValue.value);
            break;
        case '/':
            finalyResult = Number(memoryInput2) / Number(inputValue.value);
            break;

    }
    inputValue.value = finalyResult;
}
