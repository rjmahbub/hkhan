const express = require("express");
const router = express();
const { MealStatus } = require("../controllers/dashboard.controller");

router.post("/meal-status", MealStatus);
router.post("/user-register", userRegister);
router.post("/user-login", userLogin);
router.post("/all-users", allUsers);
router.post('/user-update', updateUser)

module.exports = router;
