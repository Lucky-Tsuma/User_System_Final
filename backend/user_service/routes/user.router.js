const router = require('express').Router();
const { registerUser, showUsers, showUser, deleteUser } = require('../controllers/user.controller');
const { checkToken } = require('../middleware/token_validation');
const { hasPermission } = require('../helpers/checkPermission');

router.post('/registerUser', registerUser);
router.get('/showUsers', checkToken, hasPermission('can_view_all_users'), showUsers);
router.post('/showUser', checkToken, showUser);
router.post('/deleteUser', checkToken, deleteUser);

module.exports = router;


