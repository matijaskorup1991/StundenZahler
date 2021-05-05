const db = require('../db');
const ErrorHandler = require('../utils/error');
const asyncCall = require('../utils/asyncCall');

function sendTokenResponse(user, statusCode, res) {
  let token;
  const options = {
    expires: new Date(Date.now() * 24 * 60 * 60 * 10000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV == 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({
    sucess: true,
    token,
    username: user.username,
    email: user.email,
  });
}

const register = asyncCall(async (req, res, next) => {
  const { username, password, email } = req.body;

  sendTokenResponse(user, 201, res);
});

const login = asyncCall(async (req, res, next) => {
  const { email, password } = req.body;

  // if (!user) {
  //   return next(new ErrorHandler('User does not exist!', 404));
  // }

  // const isMatch;

  // if (!isMatch) {
  //   return next(new ErrorHandler('Wrong password!', 403));
  // }

  sendTokenResponse(user, 200, res);
});

const updateProfile = asyncCall(async (req, res, next) => {
  let { oldPassword, newPassword } = req.body;
  let user;

  if (!oldPassword || !newPassword) {
    return next(new ErrorHandler('Please provide all Information!', 401));
  }

  const isMatch = await user.comparePassword(oldPassword);

  if (!isMatch) {
    return next(new ErrorHandler('Wrong Password!', 403));
  }

  user.password = newPassword;

  res.status(200).json({ success: true, message: 'Password updated' });
});

const logout = asyncCall(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 100),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: 'Loged out successfully',
  });
});

const getMe = asyncCall(async (req, res, next) => {
  let user = await db.query('select * from users where id=$1', [req.user.id]);
  if (!user) {
    return next(new ErrorHandler('Could not find a profile!', 404));
  }

  res.status(200).json({
    success: true,
    user,
  });
});

const deleteMyProfile = asyncCall(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Profile deleted successfully',
  });
});

module.exports = {
  register,
  login,
  logout,
  deleteMyProfile,
  getMe,
  updateProfile,
};
