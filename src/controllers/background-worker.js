const log = require('../utils/logger')
const TaskScheduler = require('./task-scheduler-controller')

class BackgroundWorker {
    static (pollingInterval) {
        // params: pollingInterval - interval to poll in in ms
        this.pollingInterval = pollingInterval
    }
}