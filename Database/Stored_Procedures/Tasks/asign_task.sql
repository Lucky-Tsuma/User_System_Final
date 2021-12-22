CREATE OR ALTER PROC asign_task(@task_id INT, @user_id INT)
AS 
BEGIN
    UPDATE tasks
    SET user_id = @user_id
    WHERE task_id = @task_id;
END;


