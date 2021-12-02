CREATE PROC show_tasks
AS 
BEGIN
    SELECT task_id, task_name, task_description, (
        SELECT CONCAT(firstname, ' ', lastname) 
        FROM users 
        INNER JOIN tasks
        ON users.user_id = tasks.user_id
    ) username, ( 
        SELECT project_name
        FROM projects
        INNER JOIN tasks
        ON projects.project_id = tasks.task_id
    ) project
    FROM tasks
    WHERE is_deleted = 0;
END;

-- EXEC show_tasks;

