class Task {
    constructor(task_id, startdate, request_id, method, url, headers, payload, callback_id) {
        this.task_id = task_id
        this.startdate = startdate
        this.request_id = request_id
        this.method = method
        this.url = url
        this.headers = headers
        this.payload = payload
        this.callback_id = callback_id
    }
}

module.exports = Task