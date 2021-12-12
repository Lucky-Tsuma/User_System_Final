const db = require("../config");

module.exports = {

    createTask: async (req, res) => {

        const { task_name, task_description } = req.body;

        if (!task_name || !task_description) {

            return res.status(400).json({ success: 0, message: "You need to provide both the task name and description"});
        }

        try {

            await db.execute('create_task', { task_name, task_description });
            return res.status(202).json({ success: 1, message: "Task was created successfully" });
        } catch(error) {

            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    deleteTask: async (req, res) => {

        const { task_id } = req.body;

        if(!task_id) {

            return res.status(400).json({ success: 0, message: "You need to specify the task to be deleted" });
        }

        try {

            await db.execute('delete_task', { task_id });
            return res.status(202).json({ success: 1, message: "Task was deleted successfully" });
        } catch(error) {

            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    showTasks: async (req, res) => {

        try {

            const result = await db.query('show_tasks');
            return res.status(302).json({ success: 1, message: result.recordset });
        } catch(error) { 
            
            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    showTask: async (req, res) => {

        const { task_id } = req.body;

        if(!task_id) {

            return res.status(400).json({ success: 0, message: "You need to specify a task to be displayed" });
        }

        try {

            const result = await db.execute('show_task', { task_id });
            return res.status(302).json({ success: 1, message: result.recordset });
        } catch(error) {

            return res.status(500).json({ success: 0, message: 'Internal server error' });
        }
    },
    assignTask: async (req, res) => {

        const { task_id, user_id, project_id } = req.body;

        if (!task_id || !user_id || !project_id) {

            return res.status(400).json({ success: 0, message: "Sorry, you need to fill in all the fields to assign a task" });
        }

        try {

            const result = await db.execute('show_user', { user_id });
            const project = result.recordset[0].project_id;

            if ( project != project_id) {

                return res.status(406).json({ success: 0, message: "Sorry, user is currently working on  a different project" });
            }

            await db.execute('asign_task', { task_id, user_id, project_id });
            return res.status(202).json({success: 1, message: "Task was assigned successfully"});
        } catch(error) {

            return res.status(500).json({ success: 0, message: `${error}` });
        }
    }
}
