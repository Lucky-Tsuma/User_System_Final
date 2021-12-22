CREATE OR ALTER  PROC show_projects
AS 
BEGIN
    SELECT project_name, project_id
    FROM projects
    WHERE is_deleted = 0;
END;

-- EXEC show_projects;
