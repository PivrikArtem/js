//creat new class
class Apple {
    constructor(name, isWinter) {
        this.name = name;
        this.isWinter = isWinter;
        this.isDirty = true;
        this.isRotten = false;
        this.rottedCallback = null;
        setTimeout(this.rottenAppleFunction.bind(this), 5000);

    }

    rottenAppleFunction() {  // method for rotten apples
        this.isRotten = true;

        if (!!this.rottedCallback) {
            this.rottedCallback();
        }
    }
}





