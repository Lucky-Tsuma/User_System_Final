CREATE OR ALTER PROC asign_project(@user_id INT, @project_id INT)
AS 
BEGIN
    UPDATE users
    SET project_id = @project_id
    WHERE user_id = @user_id
END;

-- EXEC asign_project 9, 5;
-- EXEC asign_project 10, 4;
-- EXEC asign_project 11, 4;


-- SELECT * from users;

