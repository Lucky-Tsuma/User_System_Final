CREATE PROC show_users
AS 
BEGIN
    SELECT user_id, firstname, lastname, email, phone, role, (
        SELECT project_name FROM projects
        INNER JOIN users 
        ON projects.project_id = users.project_id
    ) project
    FROM users
    WHERE is_deleted = 0;
END;

-- EXEC show_users;


