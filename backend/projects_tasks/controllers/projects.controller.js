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
            return res.status(202).json({ success: 1, message: "project create successfully" }); 
        } catch (error) {
            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    deleteProject: async (req, res) => {},
    showProjects: async (req, res) => {

        try {

            const result = await db.query('show_projects');
            res.status(302).json({ success: 1, message: result.recordset });
        } catch(error) { 
            
            res.status(500).json({ success: 0, message: "Internal server error" });
        }
    },
    showProject: async (req, res) => {},
    assignProject: async (req, res) => {},
    showTasksInProject: async (req, res) => {}
}
