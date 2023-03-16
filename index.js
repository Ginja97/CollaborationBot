const express = require('express')
const bodyparser = require('body-parser')
const log = require('./src/utils/logger')

const port = 3100

const app = express()

app.use(bodyparser.json({ extended: false}))

app.use('/', require('./src/routes'))

app.listen(port, () => {
    log.logString(`[SERVER] Server started on port ${port}`)
})