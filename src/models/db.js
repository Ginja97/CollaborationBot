const config = require('../config/config')
const log = require('../utils/logger')
const pgPromise = require('pg-promise')
const pgp = pgPromise()

const collaborationDb = pgp(config.collaborationDbConfig)
log.logString('[INFO]', "Connection to Collaboration DB established successfully.")

module.exports = collaborationDb
