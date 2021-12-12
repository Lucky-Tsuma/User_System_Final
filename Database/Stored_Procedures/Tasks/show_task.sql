CREATE OR ALTER PROC show_task(@task_id INT)
AS 
BEGIN
    SELECT task_id, task_name, task_description, (
        SELECT CONCAT(firstname, ' ', lastname) 
        FROM users 
        WHERE users.user_id = tasks.user_id
    ) username, ( 
        SELECT project_name
        FROM projects
        WHERE tasks.project_id = projects.project_id
    ) project
    FROM tasks
    WHERE task_id = @task_id AND is_deleted = 0;
END;

-- EXEC show_task 10;

