CREATE PROC asign_project(@user_id AS INT, @project_id AS INT)
AS 
BEGIN
    UPDATE users
    SET project_id = @project_id
    WHERE user_id = @user_id
END;

-- EXEC asign_project 8, 3;

