const express = require("express");
const router = express.Router();
const { getAllMonths, deleteMonth } = require("../controller/month");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getAllMonths);
router.route("/:id").delete(protect, deleteMonth);

module.exports = router;
