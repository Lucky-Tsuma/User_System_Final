CREATE OR ALTER PROC login_user(@email VARCHAR(50))
AS 
BEGIN
    SELECT user_id, firstname, lastname, email, phone, role, password, project_id, (
        SELECT project_name FROM projects
        WHERE users.project_id = projects.project_id
    ) project
    FROM users
    WHERE email = @email AND is_deleted = 0;
END;

EXEC login_user 'hornedowl@gmail.com';