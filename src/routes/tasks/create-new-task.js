const express = require('express')
const router = express()
const TaskScheduler = require('../../controllers/task-scheduler-controller')


router.post('/', (req,res) => {
    ts = new TaskScheduler()
    res.send(ts.getTasksSorted())
})

module.exports = router