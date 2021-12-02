ALTER PROC show_user(@user_id AS INT)
AS 
BEGIN
    SELECT user_id, firstname, lastname, email, phone, role, (
        SELECT project_name FROM projects
        WHERE users.project_id = projects.project_id
    ) project
    FROM users
    WHERE user_id = @user_id AND is_deleted = 0;
END;

-- EXEC show_user 9;

