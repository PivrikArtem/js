var ArryNumber = document.querySelectorAll('.button');
var ArryOperation = document.querySelectorAll('.operation');
var ElementC = document.getElementById('IdC');
var ElementResult = document.getElementById('IdResult');
var inputValue = document.getElementById('inputId');
var finalInut;
var valueOperation;
var memoryInput1;
var memoryInput2;
var needClearResult = false;

for (let i = 0; i < ArryNumber.length; i++) {
    ArryNumber[i].addEventListener('click', onArryNumberClick);
}

for (var j = 0; j < ArryOperation.length; j++) {
    ArryOperation[j].addEventListener('click', onArryOperationClick);
}

ElementResult.addEventListener('click', onElementResultClick);

function onArryNumberClick(e) {
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

function onArryOperationClick(e) {
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
