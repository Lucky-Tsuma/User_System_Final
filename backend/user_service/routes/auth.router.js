const router = require('express').Router();
const { login, resetPassword } = require('../controllers/auth.controller');

router.post('/login', login);
router.post('/resetPassword', resetPassword);

module.exports = router;