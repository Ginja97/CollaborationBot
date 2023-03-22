const express = require('express')
const router = express()
const TaskScheduler = require('../../controllers/task-scheduler-controller')

const config = require('../../config/config')


router.post('/', (req,res) => {
    TaskScheduler.getTasksSorted(10)
    .then( value => {
        console.log(value);
    })
    res.sendStatus(200)
})

module.exports = router