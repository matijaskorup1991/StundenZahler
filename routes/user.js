const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controller/user");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

module.exports = router;
