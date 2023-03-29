SELECT request_id, last_activation, extract(EPOCH from interval)
FROM recurrent_tasks
ORDER BY request_id ASC