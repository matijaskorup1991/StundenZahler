const express = require("express");
const router = express.Router();
const { register, getAllUsers } = require("../controller/user");

router.route("/register").get(getAllUsers).post(register);

module.exports = router;
