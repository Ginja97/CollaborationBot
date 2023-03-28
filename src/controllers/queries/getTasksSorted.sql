SELECT task_id, startdate, requests.request_id, method, url, headers, payload, callback_id
FROM task_queue JOIN requests ON task_queue.request_id = requests.request_id
ORDER BY startdate ASC -- earliest tasks are first in line
LIMIT ${limit}