CREATE OR ALTER  PROC create_project(@project_name AS VARCHAR(20)) 
AS
BEGIN 
    DECLARE @is_deleted int;
    SET @is_deleted = 0;
    INSERT INTO projects(
        project_name,
        is_deleted
    ) VALUES (
        @project_name,
        @is_deleted
    )
END;

--Inserting data. Testing the stored proc above
-- EXEC create_project 'Final User System';
-- EXEC create_project 'CSS challenge';



