const express = require('express')
const router = express()

router.use('/tasks', require('./tasks'))

router.get('/', (req, res) => {
    res.status(200).send("Welcome to Ginjas Collaboration-API-Server!")
})

module.exports = router
