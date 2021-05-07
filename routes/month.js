const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getAllMonths,
  createMonth,
  deleteMonth,
} = require('../controller/months');

router.route('/').get(protect, getAllMonths).post(protect, createMonth);
router.route('/:id').delete(protect, deleteMonth);

module.exports = router;
