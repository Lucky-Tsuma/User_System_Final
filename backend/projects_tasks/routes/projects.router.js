const router = require('express').Router();
const { createProject, deleteProject, showProjects, showProject, assignProject } = require('../controllers/projects.controller');

router.get('/createProject', createProject);
router.get('/deleteProject', deleteProject);
router.get('/showProjects', showProjects);
router.get('/showProject', showProject);
router.get('/assignProject', assignProject);

module.exports = router;

