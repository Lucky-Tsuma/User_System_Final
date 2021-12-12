const db = require("../config");
const joi = require("joi");

module.exports = {

    createProject: async (req, res) => {

        const schema = joi.object().keys({
            project_name: joi.string().required()
        });

        const { error } = schema.validate(req.body);

        if(error) {
            // status 406. Not acceptable
            return res.status(406).json({ success: 0, message: error.details[0].message });
        }

        const { project_name } = req.body;

        try {
            await db.execute('create_project', { project_name });
            return res.status(202).json({ success: 1, message: "project created successfully" }); 
        } catch (error) {
            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    deleteProject: async (req, res) => {

        const { project_id } = req.body;

        if(!project_id) {

            return res.status(400).json({ success: 0, message: "Sorry, you need to select a project to delete" });
        }

        try {

            await db.execute('delete_project', { project_id });
            return res.status(202).json({ success: 1, message: "Project was deleted successfully" });
        } catch(error) {

            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    showProjects: async (req, res) => {

        try {

            const result = await db.query('show_projects');
            return res.status(302).json({ success: 1, message: result.recordset });
        } catch(error) { 
            
            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    showProject: async (req, res) => {

        const { project_id } = req.body;

        if(!project_id) {

            return res.status(400).json({ success: 0, message: "You need to specify a project to be displayed" });
        }

        try {

            const result = await db.execute('show_project', { project_id });
            return res.status(302).json({ success: 1, message: result.recordset });
        } catch(error) {

            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    assignProject: async (req, res) => {

        const { user_id, project_id } = req.body;

        if (!user_id || !project_id) {

            return res.status(400).json({ success: 0, message: "You need to specify both the project and the user to be assigned to" });
        }

        try {

            await db.execute('asign_project', { user_id, project_id });
            return res.status(202).json({ success: 1, message: "Project was assigned successfully" });
        } catch(error) {

            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    showTasksInProject: async (req, res) => {

        const { project_id } = req.body;

        if(!project_id) {

            return res.status(400).json({ success: 0, message: "You need to specify a project to display its tasks" });
        }

        try {

            const result = await db.execute('show_tasks_in_project', { project_id });
            return res.status(302).json({ success: 1, message: result.recordset });
        } catch(error) {

            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    }
}
