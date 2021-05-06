const db = require('../db');
const ErrorHandler = require('../utils/error');
const jwt = require('jsonwebtoken');
const asyncCall = require('../utils/asyncCall');

let protect = asyncCall(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(
      new ErrorHandler('You are not authorized to access this route!', 403)
    );
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    let { rows } = await db.query('select * from users where id=$1', [
      decoded.id,
    ]);
    req.user = rows[0];

    next();
  } catch (error) {
    return next(error);
  }
});

module.exports = {
  protect,
};
