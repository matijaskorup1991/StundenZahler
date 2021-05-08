const express = require('express');
const router = express.Router();
const {
  getAllDays,
  getDay,
  updateDay,
  deleteDay,
  createDay,
} = require('../controller/day');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getAllDays).post(protect, createDay);
router
  .route('/:id')
  .delete(protect, deleteDay)
  .get(protect, getDay)
  .put(protect, updateDay);

module.exports = router;
