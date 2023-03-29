SELECT request_id, method, url, headers, payload, callback_id
FROM requests
WHERE   method = ${method}
    AND url = ${url}
    AND headers = ${headers}
    AND payload = ${payload}