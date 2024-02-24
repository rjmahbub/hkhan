const express = require("express");
const router = express();
const { MealStatus } = require("../controllers/dashboard.controller");
const { userRegister, userLogin, allUsers, updateUser} = require("../controllers/users.controller");


module.exports = router;
