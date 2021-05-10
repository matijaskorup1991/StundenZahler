const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getAllMonths,
  createMonth,
  deleteMonth,
  getMonth,
} = require('../controller/months');

router.route('/').get(protect, getAllMonths).post(protect, createMonth);
router.route('/:id').get(protect, getMonth).delete(protect, deleteMonth);

module.exports = router;
