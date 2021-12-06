const router = require("express").Router();
const { registerUser } = require("../controllers/register.controller");

router.post('/', registerUser);

module.exports = router;
