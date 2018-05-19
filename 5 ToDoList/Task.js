class Task {
    constructor(title, isDone, id) {
        this.title = title;
        this.isDone = false;
        this.onDeleteCallback = null;
        this.onChangeChckboxCallback = null
        this.element = null;
        this.id = id;
        this.imggif=null;
        this._service = new ToDoListService;
    }

    render() {
        this.element = document.createElement('li');
        this.element.innerHTML = `<input type='checkbox'${this.isDone ? "checked" : ""}>${this.title}
         <button data-role='clickDelete'>x</button><img id=imggif src="imgs/1.gif"> `;
        const deleteButton = this.element.querySelector('[data-role="clickDelete"]');
        const inputCheckbox = this.element.querySelector('input');
        this.imggif = this.element.querySelector('#imggif');
        deleteButton.addEventListener('click', this._onDelete.bind(this));
        inputCheckbox.addEventListener('change', this._onChange.bind(this));

        return this.element;
    }
    loadingGif() {
        this.imggif.style.display = 'inline-block';
    }

    noLoadingGif() {
        this.imggif.style.display = 'none';
    }

    _onDelete(e) {
        this.loadingGif();
        this._service.deleteTask(this.id, this._onDeleteSuccess.bind(this));
    }

    _onDeleteSuccess(data) {
        if (!!this.onDeleteCallback) {
            this.onDeleteCallback(this);
        }
    }

    _onChange(e) {
        this.loadingGif();
        this._service.putTask(this.id, this.isDone, this.title, this._onChangeCheckbox.bind(this))
    }

    _onChangeCheckbox(data) {
        if (!!this.onChangeChckboxCallback) {
            this.onChangeChckboxCallback(this);
        }
    }
}
