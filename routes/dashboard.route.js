const express = require("express");
const router = express();
const { MealStatus } = require("../controllers/dashboard.controller");

router.post("/meal-status", MealStatus);

module.exports = router;
