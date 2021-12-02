ALTER PROC show_users
AS 
BEGIN
    SELECT user_id, firstname, lastname, email, phone, role, project_id, (
        SELECT project_name FROM projects
        WHERE users.project_id = projects.project_id
    ) project
    FROM users
    WHERE is_deleted = 0;
END;

-- EXEC show_users;


