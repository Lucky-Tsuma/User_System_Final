CREATE OR ALTER PROC show_new_users
AS 
BEGIN
    SELECT user_id, firstname, lastname, email
    FROM users
    WHERE is_email_sent = 0 AND is_deleted = 0;
END;

EXEC show_new_users;



