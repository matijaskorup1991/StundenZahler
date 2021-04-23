const express = require("express");
const router = express.Router();
const { getAllMonths } = require("../controller/month");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getAllMonths);

module.exports = router;
