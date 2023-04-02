const config = require('../config/config')
const log = require('../utils/logger')
import fetch from 'node-fetch';

function craftGenshinHeaders(extraHeaders) {
    let headers = config.genshinBrowserHeaders
    for (header in extraHeaders) {
        headers[header] = extraHeaders[header]
    }
    return headers
}


function sendRequest(method, url, headers, body) {
    // return promise of response data
    return fetch(url, {
                        method: method,
                        body: JSON.stringify(body),
                        headers: headers
                })
            .then((response) => {
                log.logString('[CALLBACK][EXECUTION][INFO]', `callback ${method} @ ${url} responded with: ${JSON.stringify(response)}`)
                return response.json()
            })
            .catch((error) => {
                log.logString('[CALLBACK][EXECUTION][ERROR]', error)
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
        let full_headers = craftGenshinHeaders(headers)
        response = sendRequest(method, url, full_headers, body)
        break;
    default:
        log.logString('[CALLBACK][WARNING]', `No callback found for callback_id: ${callback_id} with request: ${method} @ ${url}`)
 }
}


module.exports = executeCallback