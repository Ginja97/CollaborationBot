const express = require('express')
const router = express()
const TaskScheduler = require('../../controllers/task-scheduler-controller')
const taskUtils = require('../../utils/task-utils')
const log = require('../../utils/logger')

router.get('/:amount', (req, res) => {
    if (!req.params.amount) {
        req.params.amount = 10
    }
    TaskScheduler.getTasksSorted(req.params.amount)
    .then((taskList => {
        res.send(taskList)
    }))
})


router.post('/', (req,res) => {
    let task = taskUtils.makeTaskFromRequest(req.body)
    TaskScheduler.pushNewTask(task)
    res.status(201).send()
})



module.exports = router