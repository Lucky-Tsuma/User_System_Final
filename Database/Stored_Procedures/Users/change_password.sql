CREATE PROC change_password(@user_id AS INT, @new_password AS VARCHAR(200)) AS
BEGIN
    UPDATE users
    SET password = @new_password
    WHERE user_id = @user_id;
END;

-- Execute as below
-- EXEC change_password 8, 'changedPassword';

