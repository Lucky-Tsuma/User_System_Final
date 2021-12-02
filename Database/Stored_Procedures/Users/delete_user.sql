CREATE PROC delete_user(@user_id AS INT) AS
BEGIN
    UPDATE users
    SET is_deleted = 1
    WHERE user_id = @user_id;
END;

-- Execute as below
-- EXEC delete_user 7;

