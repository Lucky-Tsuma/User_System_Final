const router = require('express').Router();
const { createProject, deleteProject, showProjects, showProject, assignProject, showTasksInProject } = require('../controllers/projects.controller');
const { hasPermission } = require('../helpers/checkPermission');

router.post('/createProject', hasPermission('can_create_project'), createProject);
router.post('/deleteProject', hasPermission('can_delete_project'), deleteProject);
router.post('/showTasksInProject', hasPermission('can_show_tasks_in_project'), showTasksInProject);
router.get('/showProjects', hasPermission('can_show_projects'), showProjects);
router.post('/showProject', hasPermission('can_show_project'), showProject);
router.post('/assignProject', hasPermission('can_assign_project'), assignProject);

module.exports = router;

