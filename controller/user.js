const db = require('../db');
const ErrorHandler = require('../utils/error');
const asyncCall = require('../utils/asyncCall');
const hashPassword = require('../utils/hashPassword');
const getJwt = require('../utils/getJwt');
const matchPassword = require('../utils/matchPassword');
const checkInput = require('../utils/checkInputData');

function sendTokenResponse(user, statusCode, res) {
  let token = getJwt(user.rows[0].id);
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
    username: user.rows[0].username,
    email: user.rows[0].email,
  });
}

const register = asyncCall(async (req, res, next) => {
  // const { username, password, email } = req.body;
  let username = checkData(req.body.username);
  let password = checkData(req.body.password);

  if (username && password === false) {
    return next(new ErrorHandler('Please provide all Information!', 401));
  }

  let hashedPassword = await hashPassword(password);

  if (hashedPassword) {
    let user = await db.query(
      'insert into users (username, password, email) values ($1, $2, $3) returning *',
      [username, hashedPassword, email]
    );

    sendTokenResponse(user, 201, res);
  }
});

const login = asyncCall(async (req, res, next) => {
  const { email, password } = req.body;

  let user = await db.query('select * from users where email =$1', [email]);

  if (!user) {
    return next(new ErrorHandler('User does not exist!', 404));
  }

  let isMatch = await matchPassword(password, user.rows[0].password);

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
