function getDateTime(precise = false, date_only = false, simpleEuropeanFormat = false, dateOb = undefined) {
    // returns date & time in:
    // date-only: YYYY-MM-DD format
    // no params: YYYY-MM-DD HH:MM:SS format
    // precise: YYYY-MM-DD HH:MM:SS:mmm format
    // simpleEuropeanFormat: DD.MM.YY format
    
    if (dateOb === undefined) {
        dateOb = new Date()
    }

    let timezoneOffset = 1
    dateOb.setTime(dateOb.getTime() + timezoneOffset * 60 * 60 * 1000)

    // get time units and pad 0 before single digit values
    let day = zeroPad(dateOb.getDate(), 2)
    let month = zeroPad(dateOb.getMonth() + 1, 2)
    let year = dateOb.getFullYear()
    let hours = zeroPad(dateOb.getHours(), 2)
    let minutes = zeroPad(dateOb.getMinutes(), 2)
    let seconds = zeroPad(dateOb.getSeconds(), 2)
    let milliseconds = zeroPad(dateOb.getMilliseconds(), 3)

    if (simpleEuropeanFormat) {
        return day + '.' + month + '.' + String(year).slice(2)
    }

    let currentDateTime = year + '-' + month + '-' + day
    if (!date_only) {
        currentDateTime += ' ' + hours + ':' + minutes + ':' + seconds
        if (precise) currentDateTime += '.' + milliseconds
    }

    return currentDateTime
}

function getCurrentYear(date) {
    return "" + (new Date()).getFullYear()
}

function getCurrentMonth(date) {
    return zeroPad("" + ((new Date()).getMonth() + 1), 2)
}

function konnektor_time_to_timestamp(str) {
    return str.replace('T',' ');
}

function zeroPad(toPad, n) {
    paddedStr = toPad.toString()
    while (paddedStr.length < n) {
        paddedStr = '0' + paddedStr
    }
    return paddedStr
}

module.exports = {
    getDateTime,
    konnektor_time_to_timestamp,
    getCurrentYear,
    getCurrentMonth
}
