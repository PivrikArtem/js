//creat mani class for apple, pear, orange
class Basket {
    constructor() {
        this._apples = [];
        this._pears = [];
        this._oranges = [];
        this.winterApplesCount = 0;
        this._dal = new LocalStorageService(this._apples, this._pears, this._oranges, this.onSaveSuccess);
    }

    addProduct(product) {        //   add product in basket
        if (product.constructor.name === 'Apple') {
            this._apples.push(product)
            if (product.isWinter === true) {
                this.winterApplesCount++
            }
        }
        if (product.constructor.name === 'Pear') {
            this._pears.push(product);
        }
        if (product.constructor.name === 'Orange') {
            this._oranges.push(product);
        }
    }

    getAllApples() {              // get massif apples
        return (this._apples)
    }
    getAllPears() {              // get massif pears
        return (this._pears)
    }
    getAllOranges() {           // get massif oranges
        return (this._oranges)
    }
    clear() {                   // clear massifs
        this._apples = [];
        this._pears = [];
        this._oranges = [];
    }
    wash() {                 // wash our fruit          
        for (var i = 0; i < this._apples.length; i++) {
            this._apples[i].isDirty = false;
            console.log(this._apples[i].isDirty);
        }
        for (var i = 0; i < this._pears.length; i++) {
            this._pears[i].isDirty = false;
            console.log(this._pears[i].isDirty);
        }
        for (var i = 0; i < this._oranges.length; i++) {
            this._oranges[i].isDirty = false;
            console.log(this._oranges[i].isDirty);
        }
    }
    
    saveBasket(){
        this._dal.save();
    }
    clearBasket(){
        this._apples = [];
        this._pears = [];
        this._oranges = [];
        this._dal.clear(this.onclearSucces);
        console.log('basket is empty')
    }
    
    onSaveSuccess(){
        window.alert('save fruits');
    }
    onclearSucces(){
        window.alert('save succesful');
    }
}
