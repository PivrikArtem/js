//creat new class
class Orange {
    constructor(name, country) {
        this.name = name;
        this.country = country;
        this.isDirty = true;
        this.isRotten = false;
        setTimeout(this.isRotten = true, 5000);

    }
}