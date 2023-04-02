const config = require('../config/config')
const log = require('../utils/logger')
const fetch = require('node-fetch')

function craftGenshinHeaders(extraHeaders) {
    let headers = config.genshinBrowserHeaders
    for (header in extraHeaders) {
        headers[header] = extraHeaders[header]
    }
    return headers
}


function sendRequest(method, url, headers, body) {
    fetch(url, {
        method: method,
        body: JSON.stringify(body)
    })
}


function executeCallback(method, url, headers, body, callback_id) {
 switch (callback_id) {
    case 0:
        break;
    case 1:
        // honey redeemer
        break;
    case 2:
        // genshin daily login
        let headers = craftGenshinHeaders(headers)

        break;
    default:
        log.logString('[CALLBACK][WARNING]', `No callback found for callback_id: ${callback_id} with request: ${method} @ ${url}`)
 }
}


module.exports = executeCallback