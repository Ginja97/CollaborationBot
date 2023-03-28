const express = require('express')
const router = express()

router.use('/new', require('./create-new-task'))
router.use('/', require('./get-next-tasks'))

module.exports = router