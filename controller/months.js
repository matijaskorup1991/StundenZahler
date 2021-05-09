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

const getMonth = asyncCall(async (req, res, next) => {
  let { rows } = await db.query('select * from months where id=$1', [
    req.params.id,
  ]);

  if (!rows[0]) {
    return next(new ErrorResponse('Something went wrong!', 404));
  }
  res.status(200).json({
    success: true,
    data: rows[0],
  });
});

const createMonth = asyncCall(async (req, res, next) => {
  let { data } = req.body;
  if (!data || data.length < 1) {
    return next(new ErrorHandler('Please provide all information', 406));
  }

  let {
    rows,
  } = await db.query('insert into months (data, user_id) values ($1,$2)', [
    JSON.stringify(data),
    req.user.id,
  ]);

  res.status(201).json({
    success: true,
    data: rows[0],
  });
});

const deleteMonth = asyncCall(async (req, res, next) => {
  await db.query('remove from months where id=$1', [req.params.id]);

  res.status(200).json({
    success: true,
    message: 'File deleted!',
  });
});

module.exports = {
  getAllMonths,
  createMonth,
  deleteMonth,
  getMonth,
};
