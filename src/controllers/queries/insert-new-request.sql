-- only TRIES TO insert when the row doesnt exist already 
-- -> prevents sequence from incremenitng without new rows being added 

INSERT INTO requests (method, url, headers, body, callback_id)
SELECT ${method}, ${url}, ${headers}, ${body}, ${callback_id}
WHERE NOT EXISTS (
    SELECT FROM requests 
    WHERE method = ${method} 
            AND url = ${url}
            AND headers = ${headers}
            AND body = ${body}
    )
RETURNING request_id