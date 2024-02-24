const express = require("express");
const router = express();
const { Index, checkLogin, userRegister, userLogin, allUsers, updateUser} = require("../controllers/users.controller");

module.exports = router;
