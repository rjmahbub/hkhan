const express = require("express");
const router = express();
const { MealStatus, userRegister } = require("../controllers/dashboard.controller");

router.post("/meal-status", MealStatus);

module.exports = router;
