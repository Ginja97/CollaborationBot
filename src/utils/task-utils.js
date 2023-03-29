const Task = require('../models/task')


function makeTaskFromRequest(reqBody) {
    return new Task(
        null, 
        reqBody.startdate, 
        null, 
        reqBody.method, 
        reqBody.url, 
        reqBody.headers ? reqBody.headers : {}, 
        reqBody.payload ? reqBody.payload : {}, 
        reqBody.callback_id ? reqBody.callback_id : 0
    )
}


module.exports = {
    makeTaskFromRequest: makeTaskFromRequest
}