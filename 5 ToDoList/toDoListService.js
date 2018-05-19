class ToDoListService {
    constructor() {
        this.url = "http://repetitora.net/api/JS/Tasks";
    }
    getAllTasks(callback) {
        $.ajax({
            url: this.url,
            type: 'get',
            data: { widgetId: 123, page: 1, count: 100 },
            success: this._successOnGet.bind(this, callback)
        });
    }
    postTask(taskName, callback) {
        $.ajax({
            url: this.url,
            type: 'post',
            data: { widgetId: 123, title: taskName },
            success: this._successPost.bind(this, callback)

        })
    }
    deleteTask(taskId, callback) {
        $.ajax({
            url: this.url,
            type: 'delete',
            data: { widgetId: 123, taskId: taskId },
            success: this._successOnDelete.bind(this, callback)
        });
    }
    putTask(taskId, done, title, callback) {
        $.ajax({
            url: this.url,
            type: 'put',
            data: { widgetId: 123, taskId: taskId, done: done, title: title },
            success: this._successOnPut.bind(this, callback)
        });
    }
    _successOnGet(callback, data) {
        console.log(data);
        callback(data);
    }

    _successPost(callback, data) {
        console.log(data);
        callback(data);
    }
    _successOnDelete(callback, data) {

        console.log(data);
        if (data.status === 'success') {
            callback();
        }
    }
    _successOnPut(callback, data) {
        console.log(data);
        callback();
    }

}