const express = require('express')
const router = express()

router.get('/', (req, res) => {
    res.status(200).send("Welcome to Ginjas server.")
})

module.exports = router