CREATE OR ALTER PROC mark_as_sent
AS 
BEGIN
    UPDATE users
    SET is_email_sent = 0
    WHERE is_email_sent = 1;
END;



