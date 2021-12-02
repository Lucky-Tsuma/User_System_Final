CREATE PROC create_user(@firstname AS VARCHAR(20), 
    @lastname AS VARCHAR(20), 
    @email AS VARCHAR(50), 
    @phone AS VARCHAR(20), 
    @role AS VARCHAR(20), 
    @password AS VARCHAR(200)) AS
BEGIN 
    DECLARE @is_deleted int;
    SET @is_deleted = 0;
    INSERT INTO users(
        firstname,
        lastname,
        email,
        phone,
        role,
        password,
        is_deleted
    ) VALUES (
        @firstname,
        @lastname,
        @email,
        @phone,
        @role,
        @password,
        @is_deleted
    )
END;

-- --Inserting data. Testing the stored proc above
-- EXEC create_user 'Lucky', 'Tsuma', 'luckytsumah@gmail.com', '0703766814', 'admin', 'password';
-- EXEC create_user 'Jane', 'Doe', 'janedoe@gmail.com', '0712345678', 'user', 'password';
-- EXEC create_user 'john', 'Doe', 'johndoe@gmail.com', '0787654321', 'user', 'password';

