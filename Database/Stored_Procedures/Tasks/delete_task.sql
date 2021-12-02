CREATE OR ALTER PROC delete_task(@task_id AS INT) AS
BEGIN
    UPDATE tasks
    SET is_deleted = 1
    WHERE task_id = @task_id;
END;

-- Execute as below
-- EXEC delete_task 2;

