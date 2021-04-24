const express = require("express");
const router = express.Router();
const {
  getAllMonths,
  deleteMonth,
  updateMonth,
  createMonth,
  getSingleMonth,
} = require("../controller/month");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getAllMonths).post(protect, createMonth);
router
  .route("/:id")
  .delete(protect, deleteMonth)
  .get(protect, getSingleMonth)
  .patch(protect, updateMonth);

module.exports = router;
