CREATE PROC asign_task(@task_id AS INT, @user_id AS INT, @project_id AS INT)
AS 
BEGIN
    UPDATE tasks
    SET user_id = @user_id, project_id = @project_id
    WHERE task_id = @task_id;
END;

-- EXEC asign_task 3, 8, 3;