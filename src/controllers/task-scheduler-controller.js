const path = require('path')
const pgp = require('pg-promise')
const collaborationDb = require('../models/db')
const log = require('../utils/logger')

// Create Queryfiles
function readSql(file) {
    const fullPath = path.join(__dirname, file)
    return new pgp.QueryFile(fullPath, {minify: true})
}

const sqlGetTasksSorted = readSql('./queries/getTasksSorted.sql')


class TaskScheduler{
    static {
        // static initliazing
        // console.log("static init called")
    }

    static getTasksSorted(limit) {
        return collaborationDb.manyOrNone(sqlGetTasksSorted, {limit: limit})
               .then((value) => {
                   return value
               })
               .catch((error) => {
                   if (error instanceof pgp.errors.QueryFileError) {
                       log.logString('[TASK SCHEDULER]', "Error with Query File")
                   }
                   else {
                       throw error
                   }
               })
    }
}

module.exports = TaskScheduler