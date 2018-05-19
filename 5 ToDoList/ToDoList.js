class ToDoList {
    constructor(whatToDo, elementId) {
        this.whatToDo = whatToDo;
        this.elementId = elementId;
        this.InputTaskName;
        this._tasks = [];
        this.pictureOnload = null;
        this.newService = new ToDoListService;
        this.url = "http://repetitora.net/api/JS/Tasks";
    }

    render() {  // render all ToDoList
        var renderElement = document.querySelector('#' + this.elementId);
        renderElement.innerHTML = `<input type="text" placeholder='What to buy?' id='inputValueTask${this.elementId}'>
<button id='addButtonId${this.elementId}'> add </button><img id=img${this.elementId} src="imgs/1.gif"><hr/><div data-role="tasks"></div>`

        renderElement.querySelector('#' + 'addButtonId' + this.elementId).onclick = this._onClickAdd.bind(this);
        this.pictureOnload = renderElement.querySelector('#' + 'img' + this.elementId);
        this.newService.getAllTasks(this._onGetSuccess.bind(this));

    }
    loading() {
        this.pictureOnload.style.display = 'inline-block';
    }

    noLoading() {
        this.pictureOnload.style.display = 'none';
    }

    _renderTasks() {
        const tasksBlock = document.querySelector('[data-role="tasks"]');
        tasksBlock.innerHTML = ''; // clear older
        for (let i = 0; i < this._tasks.length; i++) {
            tasksBlock.append(this._tasks[i].render());
            this._tasks[i].onDeleteCallback = this._onTaskDeleted.bind(this);
            this._tasks[i].onChangeChckboxCallback = this._onChangeIsDone.bind(this);
        }
    }

    _onClickAdd() {
        this.loading();
        this.InputTaskName = document.querySelector('#' + 'inputValueTask' + this.elementId);
        if (this.InputTaskName.value != '') {
            this.newService.postTask(this.InputTaskName.value, this._onPostSucces.bind(this));
        }
    }

    _onTaskDeleted(task) {
        for (let i = 0; i < this._tasks.length; i++) {
            if (this._tasks[i] === task) {
                this._tasks.splice(i, 1);
                task.noLoadingGif()
            };
        }
        this._renderTasks();
    }

    _onChangeIsDone(task) {

        for (let i = 0; i < this._tasks.length; i++) {
            if (this._tasks[i] === task) {
                this._tasks[i].element.classList.toggle('crossing');
                this._tasks[i].isDone = !this._tasks[i].isDone;
                task.noLoadingGif()
            }
        }
    }
    _onGetSuccess(serverResponce) {
        for (let i = 0; i < serverResponce.length; i++) {
            var newTask = new Task(serverResponce[i].title, serverResponce[i].isDone, serverResponce[i].id);
            this._tasks.push(newTask);
        }
        console.log(this._tasks);
        this._renderTasks();
    }
    _onPostSucces(serverTask) {
        var newServerTask = serverTask.task;
        var newTask = new Task(newServerTask.title, newServerTask.isDone, newServerTask.id);
        this.InputTaskName.value = '';
        this._tasks.push(newTask);
        this.noLoading();
        this._renderTasks();
    }
}