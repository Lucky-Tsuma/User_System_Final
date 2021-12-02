CREATE PROC show_user(@user_id AS INT)
AS 
BEGIN
    SELECT user_id, firstname, lastname, email, phone, role, (
        SELECT project_name FROM projects
        INNER JOIN users 
        ON projects.project_id = users.project_id
    ) project
    FROM users
    WHERE user_id = @user_id AND is_deleted = 0;
END;

-- EXEC show_user 8;

