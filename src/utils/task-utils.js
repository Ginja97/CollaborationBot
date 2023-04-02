const Task = require('../models/task')


function makeTaskFromRequest(reqBody) {
    return new Task(
        null, 
        reqBody.startdate, 
        null, 
        reqBody.method ? reqBody.method : "GET", 
        reqBody.url ? reqBody.url : "google.com", 
        reqBody.headers ? reqBody.headers : {}, 
        reqBody.body ? reqBody.body : {}, 
        reqBody.callback_id ? reqBody.callback_id : 0
    )
}


module.exports = {
    makeTaskFromRequest: makeTaskFromRequest
}