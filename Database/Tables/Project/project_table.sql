CREATE TABLE projects (
    project_id INT IDENTITY(1, 1) PRIMARY KEY,
    project_name VARCHAR(50),
    is_deleted INT
);
