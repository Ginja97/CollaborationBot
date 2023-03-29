INSERT INTO requests (method, url, headers, payload, callback_id) VALUES
('${method}', '${url}', '${headers}', '${payload}', ${callback_id})
RETURNING request_id