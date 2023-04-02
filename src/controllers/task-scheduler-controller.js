const path = require('path')
const pgp = require('pg-promise')
const collaborationDb = require('../models/db')
const log = require('../utils/logger')
const Task = require('../models/task')
const { request } = require('http')
const pgPromise = require('pg-promise')


// Create Queryfiles
function readSql(file) {
    const fullPath = path.join(__dirname, file)
    return new pgp.QueryFile(fullPath, {minify: true})
}

const sqlGetTasksSorted = readSql('./queries/get-tasks-sorted.sql')
const sqlGetRequests = readSql('./queries/get-requests.sql')
const sqlGetRequestIDWhere = readSql('./queries/get-request-id-where.sql')
const sqlInsertNewRequest = readSql('./queries/insert-new-request.sql')
const sqlInsertNewTask = readSql('./queries/insert-new-task.sql')


class TaskScheduler{
    static {
        // static initliazing
        // console.log("static init called")
    }

    static getTasksSorted(limit) {
        // returns a Promise of an list of sorted Tasks (earliest Task is first)
        // TODO: use caching
        return collaborationDb.manyOrNone(sqlGetTasksSorted, {limit: limit})
               .then((tasks) => {
                    let taskList = []
                    for (const task of tasks) {
                        taskList.push(
                            new Task(task.task_id, task.startdate, task.request_id, task.method, task.url, task.headers, task.payload, task.callback_id)
                        )
                    }
                    return taskList
               })
               .catch((error) => {
                    if (error instanceof pgp.errors.QueryFileError) {
                        log.logString('[TS][GET TASKS][ERROR]', "Error with Query File: " + error)
                    }
                    else {
                        log.logString('[TS][GET TASKS][UNKNOWN ERROR]', error)
                    }
               })
    }

    static pushNewTask(task) {
        // try inserting request
        console.log(sqlInsertNewRequest);
        return collaborationDb.one(sqlInsertNewRequest, {method: task.method, url: task.url, headers: task.headers, payload: task.payload, callback_id: task.callback_id})
                .catch(error => {
                    if (error.code === '23505') {
                        return collaborationDb.one(sqlGetRequestIDWhere, {method: task.method, url: task.url, headers: task.headers, payload: task.payload})
                    }
                    throw error
                })
                .then((request_id_row) => {
                    // request exists in database
                    let request_id = request_id_row.request_id
                    task.request_id = request_id
                })
                .then(() => {
                    // try inserting task
                    return collaborationDb.one(sqlInsertNewTask, {startdate: task.startdate, request_id: task.request_id})
                })
                .then((task_id_row) => {
                    task.task_id = task_id_row.task_id
                })
                .catch(error => {
                    log.logString('[TS][PUSH TASK][ERROR]', error)
                })
                .then(() => {
                    log.logString('[TS][PUSH TASK][INFO]', "new task pushed into queue: " + task.toString())
                })
    }

    static popNewTask() {
        return this.getTasksSorted(1)
                .then((taskList) => {
                    return taskList.pop()
                })
    }
}

module.exports = TaskScheduler