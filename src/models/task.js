class Task {
    constructor(task_id, startdate, request_id, method, url, headers, body, callback_id) {
        this.task_id = task_id
        this.startdate = startdate
        this.request_id = request_id
        this.method = method
        this.url = url
        this.headers = headers
        this.body = body
        this.callback_id = callback_id
    }

    hasRequest(requestObj) {
        if (
            this.method == requestObj.method &&
            this.url == requestObj.url &&
            this.headers == requestObj.headers &&
            this.body == requestObj.body &&
            this.callback_id == requestObj.callback_id
        ) {
            return true
        }
        
        return false
    }

    toString() {
        return `${this.method} @ ${this.url} @ ${this.startdate}`
    }
}

module.exports = Task