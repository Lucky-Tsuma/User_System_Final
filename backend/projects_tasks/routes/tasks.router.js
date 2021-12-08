const router = require('express').Router();
const { createTask, deleteTask, showTasks, showTask, assignTask } = require('../controllers/tasks.controller');

router.get('/createTask', createTask);
router.get('/deleteTask', deleteTask);
router.get('/showTasks', showTasks);
router.get('/showTask', showTask);
router.get('/assignTask', assignTask);


module.exports = router;

