//creat new class
class Pear {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.isDirty = true;
        this.isRotten = false;
        setTimeout(this.isRotten = true, 5000);
    }
}