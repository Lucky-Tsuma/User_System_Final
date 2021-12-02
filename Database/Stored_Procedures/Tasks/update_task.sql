CREATE PROC update_task(@task_id AS INT, @column_name as VARCHAR(20), @column_value as VARCHAR(200)) AS
BEGIN
    DECLARE @dynamic VARCHAR(200);
    SET @dynamic = CONCAT('UPDATE tasks SET',  @column_name, '=',  @column_value, 'WHERE task_id =', @task_id);
    PREPARE stmt FROM @dynamic;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END;

-- Execute as below
-- EXEC update_task 3, 'task_name', 'New task name';



