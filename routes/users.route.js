const express = require("express");
const router = express();
const { Index, checkLogin, userRegister, userLogin, allUsers, updateUser} = require("../controllers/users.controller");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.get("/verify-token", AuthMiddleware, Index);
router.post("/user-register", userRegister);
router.post("/user-login", userLogin);
router.post("/check-login", checkLogin);
router.post("/all-users", allUsers);
router.post('/user-update', updateUser)

module.exports = router;