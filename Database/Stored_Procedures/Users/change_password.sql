CREATE OR ALTER PROC change_password(@user_id INT, @new_password VARCHAR(200)) AS
BEGIN
    UPDATE users
    SET password = @new_password
    WHERE user_id = @user_id;
END;

-- Execute as below
-- EXEC change_password 8, 'changedPassword';

