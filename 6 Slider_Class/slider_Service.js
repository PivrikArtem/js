class sliderService {
    constructor() {
        this.url = 'http://repetitora.net/api/JS/Images';
        this.type = 'get';
       
    }
    get(callback) {
        $.ajax({
            url: this.url,
            type: this.type,
            success: this._success.bind(this, callback)
        })
    }
    _success(callback, data) {
        console.log(data);
        callback(data);
    }
}