CREATE OR ALTER PROC asign_task(@task_id INT, @user_id AS INT, @project_id AS INT)
AS 
BEGIN
    UPDATE tasks
    SET user_id = @user_id, project_id = @project_id
    WHERE task_id = @task_id;
END;

-- EXEC asign_task 4, 11, 4;
-- EXEC asign_task 5, 11, 4;
-- EXEC asign_task 6, 10, 4;

-- EXEC asign_task 7, 9, 5;
-- EXEC asign_task 8, 9, 5;
-- EXEC asign_task 9, 9, 5;
