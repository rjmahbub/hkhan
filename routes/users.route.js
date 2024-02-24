const express = require("express");
const router = express();
const { userRegister, userLogin, allUsers, updateUser} = require("../controllers/users.controller");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.post("/user-register", userRegister);
router.post("/user-login", userLogin);
router.post("/all-users", allUsers);
router.post('/user-update', updateUser)

module.exports = router;
