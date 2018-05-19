class calculator2Js {    //main class
    constructor(divId) {
        this.divId = divId;
        this.divIdName = document.querySelector('#' + divId);
    }
    render() {
        this.divIdName.innerHTML =
            `<div class='operations-block'>
        <div class='input-block'>
            <label>Number1</label>
            <input type='number' id='number1${this.divId}'/>
        </div>
        <div class='input-block'>
            <label>Operation</label>
            <select id='operations${this.divId}'>
                <option class='OperationsClass'>+</option>
                <option class='OperationsClass' selected='selected'>-</option>
                <option class='OperationsClass'>*</option>
                <option class='OperationsClass'>/</option>
            </select>
        </div>
        <div class='input-block'>
            <label>Number2</label>
            <input type='number' id='number2${this.divId}' />
        </div>
    </div>
        <div class='count-block'>
            <button id='countResult${this.divId}'>Count</button>
        </div>`
    }
    initialization() {            //initialization method
        this.countName = document.querySelector('#countResult' + this.divId)
        this.valueSelect = document.querySelector('#operations' + this.divId);
        this.input1 = document.querySelector('#number1' + this.divId);
        this.input2 = document.querySelector('#number2' + this.divId);
    }
    addListener() {               // subscribe to events
        this.countName.addEventListener('click', this.finishOperation.bind(this));
    }
    finishOperation(e) {
        if (this.valueSelect.value === '+') {
            var result = Number(this.input1.value) + Number(this.input2.value);
        } else if (this.valueSelect.value === '-') {
            var result = Number(this.input1.value) - Number(this.input2.value);
        } else if (this.valueSelect.value === '*') {
            var result = Number(this.input1.value) * Number(this.input2.value);
        } else if (this.valueSelect.value === '/') {
            var result = Number(this.input1.value) / Number(this.input2.value);
        } else {
            alert('Enter correct value');
        }
        alert(result);
    }
}



