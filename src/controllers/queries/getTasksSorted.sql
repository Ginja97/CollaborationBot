SELECT task_id, command_alias, startdate
FROM task_queue
ORDER BY startdate ASC -- earliest tasks are first in line
LIMIT ${limit}