const express = require("express");

const { getUsers, saveUser, checkLogin } = require("../controllers/users.controller");

const router = express.Router();

router.get("/", getUsers);

router.post("/users", saveUser);
router.post("/check-login", checkLogin);

module.exports = router;
