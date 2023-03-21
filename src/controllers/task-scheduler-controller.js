const path = require('path')
const pgp = require('pg-promise')
const CollaborationDB = require('../models/collaboration_db')
const log = require('../utils/logger')

// Create Queryfiles
function readSql(file) {
    const fullPath = path.join(__dirname, file)
    return new pgp.QueryFile(fullPath, {minify: true})
}

const sqlGetTasksSorted = readSql('./queries/getTasksSorted.sql')


class TaskScheduler{
    constructor() {}

    getTasksSorted = function(limit) {
        CollaborationDB.manyOrNone(sqlGetTasksSorted, {limit: limit})
        .then((value) => {
            console.log(value)
            return value
        })
        .catch((error) => {
            if (error instanceof pgp.errors.QueryFileError) {
                log.logString("[TASK SCHEDULER] Error with Query File")
            }
            else {
                throw error
            }
        })
    }
}

module.exports = TaskScheduler