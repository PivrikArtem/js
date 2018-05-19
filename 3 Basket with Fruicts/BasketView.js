//creat mani class for Basket
class BasketView {
    constructor(basket) {
        this._basket = basket;
        this.render();
    }
    render() {           // render html
        var MainDiv = document.querySelector('div')
        MainDiv.innerHTML = ` <div>
<select id="fruitSort" class='blue-fon'>
       <option selected='selected'>apple</option>
       <option >pear</option>
        <option>orange</option>
  </select>
<button class='blue-fon' id='clickCreat'>
    Creat
</button>
<button class='blue-fon' id='clickSave'>
    Save
</button>
<button  class='blue-fon' id = 'clearButton'>clear</button>
</div>
</div>
<hr/>
<div>
<div>
    <div>
        <label for="nameFruit">name:</label>
        <input class='blue-fon' id='nameFruit'/>
    </div>
    <div  id='propertyFruit'>
        <label>isWinter:</label>
        <input class='blue-fon' type="checkbox" id='isWinter'checked />
    </div>
</div>
</div>
<hr/>
<div id='BasketСontent'>
<label>basket is empty</label>
</div>`;

        var selectFruit = document.querySelector('#fruitSort');
        var keyCreat = document.querySelector('#clickCreat');
        var clearBtn = document.querySelector('#clearButton');
        var that = this;
        selectFruit.addEventListener('change', function () {     // listener change selector
            that.renderFruitProperty(selectFruit);
        });

        keyCreat.addEventListener('click', function () {      // listener for key Creat 
            that.addFruitInBasket(selectFruit);
        });
        clearBtn.addEventListener('click', function () {
            that.clearInnerBasket();

        });
    }


    renderFruitProperty(elem) {                            // render property for fruits

        var elementFruitDiv = document.querySelector('#propertyFruit');
        if (elem.value === 'apple') {
            elementFruitDiv.innerHTML = `<label>isWinter:</label> <input class='blue-fon' type="checkbox" id='isWinter' checked />`

        } else if (elem.value === 'pear') {
            elementFruitDiv.innerHTML = `<label>type pear: </label> <input class='blue-fon' type="text" id ='type'></input>`

        } else { elementFruitDiv.innerHTML = `<label>country orange: </label><input class='blue-fon' type="text" id ='country'></input>` }

    }

    addFruitInBasket(elementSelect) {             //  add fruits
        var nameFruit = document.querySelector('#nameFruit').value;
        if (elementSelect.value === 'apple') {
            var isWinter = document.querySelector('#isWinter');
            if (isWinter.checked) {
                isWinter = 'winter apple';
            } else { isWinter = 'no winter apple'; }
            var newFruit = new Apple(nameFruit, isWinter);
        } else if (elementSelect.value === 'pear') {
            var pearType = document.querySelector('#type').value;
            var newFruit = new Pear(nameFruit, pearType);
        } else {
            var orangeCountry = document.querySelector('#country').value;
            var newFruit = new Orange(nameFruit, orangeCountry);
        }
        newFruit.rottedCallback = function () {     // callback function
            alert('kabzda yabloku');
        }
        var that = this;
        this._basket.addProduct(newFruit);
        this.renderBasket();
        var keySave = document.querySelector('#clickSave');
        keySave.addEventListener('click', function () {
            that._basket.saveBasket();
        });
    }
    renderBasket() {
        var element = document.querySelector('#BasketСontent');
        element.innerHTML = 'In basket: <hr>';

        for (let i = 0; i < this._basket._apples.length; i++) {
            element.innerHTML += `
             Apples:
             <li value = >${this._basket._apples[i].name}</li>
             <option value="">${this._basket._apples[i].isWinter}</option>
             `;
        }
        for (let i = 0; i < this._basket._pears.length; i++) {
            element.innerHTML += `
             Pears:
             <li value = >${this._basket._pears[i].name}</li>
             <option value="">${this._basket._pears[i].type}</option>
             `;
        }
        for (let i = 0; i < this._basket._oranges.length; i++) {
            element.innerHTML += `
                         Oranges:
             <li value = >${this._basket._oranges[i].name}</li>
             <option value="">${this._basket._oranges[i].country}</option>
             `;
        }
    }
    clearInnerBasket() {
        this._basket.clearBasket();
        var element = document.querySelector('#BasketСontent');
        element.innerHTML = '';


    }
}