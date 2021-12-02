CREATE OR ALTER PROC show_tasks_in_project(@project_id INT) AS
BEGIN
    SELECT task_name, task_description 
    FROM tasks
    WHERE project_id = @project_id;
END;

-- Execute as below
-- EXEC show_tasks_in_project 4;
-- EXEC show_tasks_in_project 5;
