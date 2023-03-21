const express = require('express')
const router = express()

router.use('/new', require('./create-new-task'))

module.exports = router