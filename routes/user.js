const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  register,
  login,
  logout,
  deleteMyProfile,
  getMe,
  updateProfile,
} = require('../controller/user');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/me').get(protect, getMe).put(protect, updateProfile);
router.route('/deleteProfile/:id').delete(protect, deleteMyProfile);

module.exports = router;
