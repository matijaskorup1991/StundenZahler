const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getAllDays,
  getDay,
  updateDay,
  deleteDay,
  createDay,
  moveToMonth,
} = require('../controller/day');

router.route('/').get(protect, getAllDays).post(protect, createDay);
router.route('/move').delete(protect, moveToMonth);

router
  .route('/:id')
  .delete(protect, deleteDay)
  .get(protect, getDay)
  .put(protect, updateDay);

module.exports = router;
