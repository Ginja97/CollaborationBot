const express = require('express')
const router = express()

router.use('/', require('./tasks'))

module.exports = router