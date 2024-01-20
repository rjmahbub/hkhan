const express = require("express");
const router = express();
const { Index } = require("../controllers/dashboard.controller");
const CheckLogin = require("../middlewares/checkLogin");

router.get("/dashboard", CheckLogin, dashboard);

module.exports = router;