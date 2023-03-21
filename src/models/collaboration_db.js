const config = require("../config/config")
const pgPromise = require('pg-promise')
const pgp = pgPromise()

const CollaborationDB = pgp(config.collaboration_db_config)

module.exports = CollaborationDB
