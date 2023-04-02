SELECT request_id
FROM requests
WHERE   method = ${method}
    AND url = ${url}
    AND headers = ${headers}
    AND body = ${body}