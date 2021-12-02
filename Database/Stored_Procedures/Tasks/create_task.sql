CREATE PROC create_task(@task_name AS VARCHAR(30),
    @task_description AS VARCHAR(200)
) AS
BEGIN 
    DECLARE @is_deleted int;
    SET @is_deleted = 0;
    INSERT INTO tasks(
        task_name,
        task_description,
        is_deleted
    ) VALUES (
        @task_name,
        @task_description,
        @is_deleted
    )
END;

--Inserting data. Testing the stored proc above
-- EXEC create_task 'Stored Procedures', 'Create stored procedures to be used with API endpoints';


