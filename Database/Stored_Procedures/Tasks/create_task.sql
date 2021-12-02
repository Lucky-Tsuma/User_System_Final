CREATE OR ALTER PROC create_task(@task_name AS VARCHAR(30),
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
-- EXEC create_task 'Stored procedures', 'Create stored procedures to be used with API endpoints in user system project';
-- EXEC create_task 'React-redux app', 'Create react-redux app for the user system project';
-- EXEC create_task 'User system service', 'Create express app for the user system project';

-- EXEC create_task 'Header', 'The CSS challenge. Create the header.';
-- EXEC create_task 'Content Section', 'The CSS challenge. Create the middle/content section';
-- EXEC create_task 'Footer', 'The CSS challenge. Create the footer.';





