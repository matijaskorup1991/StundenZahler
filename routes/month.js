const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getAllMonths } = require('../controller/months');

router.route('/').get(protect, getAllMonths);

module.exports = router;
