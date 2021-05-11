const db = require('../db');
const ErrorHandler = require('../utils/error');
const asyncCall = require('../utils/asyncCall');
const hashPassword = require('../utils/hashPassword');
const getJwt = require('../utils/getJwt');
const matchPassword = require('../utils/matchPassword');
const checkInput = require('../utils/checkInputData');
const checkEmail = require('../utils/checkEmail');

function sendTokenResponse(user, statusCode, res) {
  let token = getJwt(user.rows[0].id);
  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 10000),
    // httpOnly: true,
  };

  if (process.env.NODE_ENV == 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({
    sucess: true,
    token,
    username: user.rows[0].username,
    userId: user.rows[0].id,
    email: user.rows[0].email,
  });
}

const register = asyncCall(async (req, res, next) => {
  let user,
    username = checkInput(req.body.username),
    password = checkInput(req.body.password),
    email = checkEmail(req.body.email);

  if (!username || !password) {
    return next(new ErrorHandler('Please provide all Information!', 401));
  }

  if (!email) {
    return next(new ErrorHandler('Wrong Email!', 401));
  }

  user = await db.query('select * from users where email=$1', [email]);
  console.log(user);

  if (user.rows[0]) {
    return next(new ErrorHandler('User already exists!', 401));
  }

  let hashedPassword = await hashPassword(password);

  if (hashedPassword) {
    user = await db.query(
      'insert into users (username, password, email) values ($1, $2, $3) returning *',
      [username, hashedPassword, email]
    );

    sendTokenResponse(user, 201, res);
  }
});

const login = asyncCall(async (req, res, next) => {
  const { email, password } = req.body;
  res.header('Access-Control-Allow-Origin', req.headers.origin);

  let user = await db.query('select * from users where email =$1', [email]);

  if (!user) {
    return next(new ErrorHandler('User does not exist!', 404));
  }

  let isMatch = await matchPassword(password, user.rows[0].password);

  if (!isMatch) {
    return next(new ErrorHandler('Wrong password!', 403));
  }

  console.log(sendTokenResponse(user, 200, res));
  sendTokenResponse(user, 200, res);
});

const updateProfile = asyncCall(async (req, res, next) => {
  let { email, oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword || !email) {
    return next(new ErrorHandler('Please provide all Information!', 401));
  }

  let { rows } = await db.query('select * from users where email=$1', [email]);

  if (!rows || rows.length < 1) {
    return next(new ErrorHandler('User does not exist!', 404));
  }

  let isMatch = await matchPassword(oldPassword, rows[0].password);

  if (!isMatch) {
    return next(new ErrorHandler('Wrong password!', 403));
  }

  let hashedPassword = await hashPassword(newPassword);

  await db.query('update users set password=$1 where email = $2', [
    hashedPassword,
    email,
  ]);

  res.status(200).json({ success: true, message: 'Password updated' });
});

const logout = asyncCall(async (req, res, next) => {
  res.cookie('token', '', {
    httpOnly: true,
    secure: true,
    maxAge: 1,
  });
  res.clearCookie('token');

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
    user: user.rows[0],
  });
});

const deleteMyProfile = asyncCall(async (req, res, next) => {
  await db.query('delete from users where id=$1', [req.params.id]);
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
