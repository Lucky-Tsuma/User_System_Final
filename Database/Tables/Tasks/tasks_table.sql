CREATE TABLE tasks(
    task_id INT IDENTITY(1, 1) PRIMARY KEY,
    task_name VARCHAR(30),
    task_description TEXT,
    user_id INT,
    project_id INT,
    is_deleted INT,
    is_complete INT CONSTRAINT df_complete DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);
