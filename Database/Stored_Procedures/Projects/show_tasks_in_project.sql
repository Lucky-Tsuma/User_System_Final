CREATE PROC show_tasks_in_project(@project_id AS INT) AS
BEGIN
    SELECT task_name, task_description 
    FROM tasks
    WHERE project_id = @project_id;
END;

-- Execute as below
-- EXEC show_tasks_in_project 3;

