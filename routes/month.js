const express = require("express");
const router = express.Router();
const {
  getAllMonths,
  deleteMonth,
  createMonth,
} = require("../controller/month");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getAllMonths).post(protect, createMonth);
router.route("/:id").delete(protect, deleteMonth);

module.exports = router;
