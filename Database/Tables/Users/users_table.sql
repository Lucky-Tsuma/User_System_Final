CREATE TABLE users(
    user_id INT IDENTITY(1, 1) PRIMARY KEY,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    email VARCHAR(50) UNIQUE,
    phone VARCHAR(20),
    role VARCHAR(20),
    password VARCHAR(200),
    project_id INT,
    is_deleted INT,
    is_email_sent INT NOT NULL DEFAULT 0,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE SET NULL
);

