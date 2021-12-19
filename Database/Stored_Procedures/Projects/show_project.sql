CREATE OR ALTER  PROC show_project(@project_id INT)
AS 
BEGIN
    SELECT project_name
    FROM projects
    WHERE project_id = @project_id AND is_deleted = 0;
END;

-- EXEC show_project 4;

