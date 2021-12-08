const router = require('express').Router();
const { registerUser, showUsers, showUser, deleteUser } = require('../controllers/user.controller');

router.post('/registerUser', registerUser);
router.post('/showUsers', showUsers);
router.post('/showUser', showUser);
router.post('/deleteUser', deleteUser);

module.exports = router;


