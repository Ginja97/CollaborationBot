const express = require('express')
const router = express()
const TaskScheduler = require('../../controllers/task-scheduler-controller')

const config = require('../../config/config')


router.post('/', (req,res) => {
    TaskScheduler.getTasksSorted(10)
    req.headers.get
    .then( value => {
        res.send(value);
    })
})

module.exports = router