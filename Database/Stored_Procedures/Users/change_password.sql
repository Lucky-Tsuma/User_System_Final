CREATE OR ALTER PROC change_password(@email VARCHAR(50), @password VARCHAR(200)) AS
BEGIN
    UPDATE users
    SET password = @password
    WHERE email = @email;
END;

-- Execute as below
-- EXEC change_password janedoe@gmail.com, 'changedPassword';

