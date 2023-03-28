const TaskScheduler = require('../../controllers/task-scheduler-controller')
const express = require('express')
const router = express()

router.get('/:amount', (req, res) => {
    if (!req.params.amount) {
        req.params.amount = 10
    }
    TaskScheduler.getTasksSorted(req.params.amount)
    .then((taskList => {
        res.send(taskList)
    }))
})


module.exports = router