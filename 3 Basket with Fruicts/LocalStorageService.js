class LocalStorageService {
    constructor(apples, pears, oranges, successCallback) {
        this.apples = apples;
        this.pears = pears;
        this.oranges = oranges;
        this.successCallback = successCallback;
    }
    save() {
        var serializedValue1 = JSON.stringify(this.apples);
        localStorage.setItem('apple', serializedValue1);
        var serializedValue2 = JSON.stringify(this.pears);
        localStorage.setItem('pear', serializedValue2);
        var serializedValue3 = JSON.stringify(this.oranges);
        localStorage.setItem('orange', serializedValue3);
        this.successCallback();
    }
    clear(onclearSucces){
        localStorage.clear();
        onclearSucces();

    }
}
