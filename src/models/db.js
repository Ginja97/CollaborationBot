const config = require('../config/config')
const log = require('../utils/logger')
const pgPromise = require('pg-promise')
const pgp = pgPromise()

const collaborationDb = pgp(config.collaborationDbConfig)


const sqlTestQuery = "SELECT 1"
collaborationDb.one(sqlTestQuery)
.then(() => {
    log.logString('[DB]', "Connection to Collaboration-DB on RDS established successfully.")
}).catch((error) => {
    log.logString('[DB][ERROR]', "Error when connecting to RDS Database: " + error)
})

module.exports = collaborationDb
