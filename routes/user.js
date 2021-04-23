const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  deleteMyProfile,
} = require("../controller/user");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/deleteProfile").delete(deleteMyProfile);

module.exports = router;
