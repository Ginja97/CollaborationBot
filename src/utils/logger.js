const fs = require('fs')
const logfiles_path = './logs/'
const path = require('path')
const datetimeHelpers = require('./datetime-helpers')

/**
 * saves a request to the local database
 */
function logRequest(
    req
) {
    logString('[LOG REQUEST]', `[${req.method}] @ ${req.originalUrl}`)
}


function logString(origin, str, consoleLog = true, useTime = true) {
    let time = datetimeHelpers.getDateTime(precise = true)

    if (useTime)
        str = `${time} ${origin} ${str}`

    if (consoleLog)
        console.log(str)

    if (str && str[str.length - 1] != '\n')
        str += '\n'

    let date = new Date()
    let filepath = path.join(logfiles_path, datetimeHelpers.getCurrentYear(), '/',/* datetimeHelpers.getCurrentMonth(), '/',*/ dateToFilename(date)) //TODO change to date helper

    fs.appendFile(filepath, str, (err) => {
        if (err) {
            if (!fs.existsSync(path.join(logfiles_path, datetimeHelpers.getCurrentYear()))){
                fs.mkdirSync(path.join(logfiles_path, datetimeHelpers.getCurrentYear()));
            }
            // if (!fs.existsSync(path.join(logfiles_path, datetimeHelpers.getCurrentYear(), '/', datetimeHelpers.getCurrentMonth()))){
            //     fs.mkdirSync(path.join(logfiles_path, datetimeHelpers.getCurrentYear(), '/', datetimeHelpers.getCurrentMonth()));
            // }
            fs.appendFile(filepath, str, (err) => {
                if (err) {
                    console.log("Error when writing into log file." + err.message)
                }
            })
        }
    })
}

function dateToFilename(date) {
    return (
        date.getFullYear() +
        '_' +
        zeroPad(date.getMonth() + 1, 2) +
        // '_' +
        // zeroPad(date.getDate(), 2) +
        '.log'
    )
}

function zeroPad(toPad, n) {
    paddedStr = ''
    for (i in [...Array(n).keys()]) {
        if (toPad >= 10 ** (n - i - 1)) break
        paddedStr += '0'
    }
    return (paddedStr += toPad)
}

module.exports = {
    logRequest,
    logString,
}
