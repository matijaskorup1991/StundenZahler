const db = require('../db');
const ErrorHandler = require('../utils/error');
const asyncCall = require('../utils/asyncCall');

const getAllMonths = asyncCall(async (req, res, next) => {
  let { rows } = await db.query('select * from months where user_id=$1', [
    req.user.id,
  ]);
  if (rows.length < 1) {
    return next(new ErrorHandler('There is nothing to show yet', 404));
  }

  res.status(200).json({
    success: true,
    months: rows,
    count: rows.length,
  });
});

const createMonth = asyncCall(async (req, res, next) => {});

module.exports = {
  getAllMonths,
  createMonth,
};
