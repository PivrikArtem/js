//create main class
class calculator1Js {
    constructor(divId) {
        this.divId = divId;
        this.divIdName = document.querySelector('#' + divId);
    }
    render() {                            //mathod add html
        this.divIdName.innerHTML =
            `<div class='operations-block'>
        <button id='buttonPlus${this.divId}'>+</button>
        <button id='buttonMinus${this.divId}'>-</button>
        <button id='buttonMultiplay${this.divId}'>*</button>
        <button id='buttonDevide${this.divId}'>/</button>
    </div>
    <div>
        <hr/>
    </div>

    <div class='inputs-block'>
        <div class='input-block'>
            <label>Number1</label>
            <input type='number' id='number1${this.divId}'/>
        </div>
        <div class='input-block'>
                <label>Number2</label>
                <input type='number'id='number2${this.divId}'/>
            </div>
    </div>`;
    }

    initialization() {                   //mathod initialization properties
        this.buttonPlus = document.querySelector('#buttonPlus' + this.divId);
        this.buttonMinus = document.querySelector('#buttonMinus' + this.divId);
        this.buttonMultiplay = document.querySelector('#buttonMultiplay' + this.divId);
        this.buttonDevide = document.querySelector('#buttonDevide' + this.divId);
        this.input1 = document.querySelector('#number1' + this.divId);
        this.input2 = document.querySelector('#number2' + this.divId);
    }
    addListener() {                   // subscribe to events
        this.buttonPlus.addEventListener('click', this.onButtonClick.bind(this));
        this.buttonMinus.addEventListener('click', this.onButtonClick.bind(this));
        this.buttonMultiplay.addEventListener('click', this.onButtonClick.bind(this));
        this.buttonDevide.addEventListener('click', this.onButtonClick.bind(this));
    }

    onButtonClick(e) {                  // mathod onClick
        var elementButton = e.currentTarget;
        var oneration = elementButton.innerHTML;
        this.makeOperation(oneration);
    }

    makeOperation(paramEl) {
        var number1 = Number(this.input1.value);
        var number2 = Number(this.input2.value);

        if (paramEl === '+') {
            var result = number1 + number2;
        } else if (paramEl === '-') {
            var result = number1 - number2;
        } else if (paramEl === '*') {
            var result = number1 * number2;
        } else if (paramEl === '/') {
            var result = number1 / number2;
        } else {
            window.alert('Enter reight operation');
        }
        window.alert(result);
    }
}







