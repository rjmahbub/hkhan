const express = require("express");
const router = express();
const { MealStatus } = require("../controllers/dashboard.controller");
const CheckLogin = require("../middlewares/AuthMiddleware");

router.post("/meal-status", MealStatus);

module.exports = router;