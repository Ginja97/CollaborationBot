INSERT INTO public.task_queue (startdate, request_id) VALUES 
('${startdate}', ${request_id})
RETURNING task_id