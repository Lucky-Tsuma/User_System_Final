CREATE OR ALTER PROC show_tasks
AS 
BEGIN
    SELECT task_id, task_name, task_description, is_complete, (
        SELECT CONCAT(firstname, ' ', lastname) 
        FROM users 
        WHERE users.user_id = tasks.user_id
    ) username, ( 
        SELECT project_name
        FROM projects
        WHERE tasks.project_id = projects.project_id
    ) project, project_id
    FROM tasks
    WHERE is_deleted = 0;
END;

EXEC show_tasks;
