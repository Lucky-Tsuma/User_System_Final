const router = require('express').Router();
const { hasPermission } = require('../helpers/checkPermission');
const { createTask, deleteTask, showTasks, showTask, assignTask, addTaskToProject } = require('../controllers/tasks.controller');

router.post('/createTask', hasPermission('can_create_task'), createTask);
router.post('/deleteTask', hasPermission('can_delete_task'), deleteTask);
router.get('/showTasks', hasPermission('can_show_tasks'), showTasks);
router.post('/showTask', hasPermission('can_show_task'), showTask);
router.post('/assignTask', hasPermission('can_assign_task'), assignTask);
router.post('/addTaskToProject', hasPermission('can_add_task_to_project'), addTaskToProject);

module.exports = router;