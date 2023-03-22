const fs = require('fs')
const logfiles_path = './logs/'
const path = require('path')
const datetime_helpers = require('./datetime_helpers')

/**
 * saves a request to the local database
 */
function logRequestLocal(
    request_method,
    endpoint,
) {
    logString(`[LOG REQUEST] [${request_method}] @ ${endpoint}`)
}


function logString(str, consoleLog = true, useTime = true) {
    let time = datetime_helpers.getDateTime(precise = true)

    if (useTime)
        str = time + ' ' + str

    if (consoleLog)
        console.log(str)

    if (str && str[str.length - 1] != '\n')
        str += '\n'

    let date = new Date()
    let filepath = path.join(logfiles_path, datetime_helpers.getCurrentYear(), '/',/* datetime_helpers.getCurrentMonth(), '/',*/ dateToFilename(date)) //TODO change to date helper

    fs.appendFile(filepath, str, (err) => {
        if (err) {
            if (!fs.existsSync(path.join(logfiles_path, datetime_helpers.getCurrentYear()))){
                fs.mkdirSync(path.join(logfiles_path, datetime_helpers.getCurrentYear()));
            }
            // if (!fs.existsSync(path.join(logfiles_path, datetime_helpers.getCurrentYear(), '/', datetime_helpers.getCurrentMonth()))){
            //     fs.mkdirSync(path.join(logfiles_path, datetime_helpers.getCurrentYear(), '/', datetime_helpers.getCurrentMonth()));
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
    logRequestLocal,
    logString,
}
