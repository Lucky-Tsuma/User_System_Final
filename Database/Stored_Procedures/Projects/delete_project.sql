CREATE OR ALTER PROC delete_project(@project_id AS INT) AS
BEGIN
    UPDATE projects
    SET is_deleted = 1
    WHERE project_id = @project_id;
END;

-- Execute as below
-- EXEC delete_project 2;

