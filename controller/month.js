const db = require('../db');
const ErrorHandler = require('../utils/error');
const asyncCall = require('../utils/asyncCall');

const getAllMonths = asyncCall(async (req, res, next) => {
  let {
    rows,
  } = await db.query(
    'select * from months where user_id = $1 order by day desc',
    [req.user.id]
  );
  if (rows.length < 1) {
    return next(new ErrorHandler('There is nothing to show yet', 404));
  }

  res.status(200).json({
    success: true,
    months: rows,
    count: rows.length,
  });
});

const createMonth = asyncCall(async (req, res, next) => {
  let month;
  res.status(201).json({
    success: true,
    month,
  });
});

const getSingleMonth = asyncCall(async (req, res, next) => {
  let { rows } = await db.query('select * from months where id=$1', [
    req.params.id,
  ]);
  if (!rows[0]) {
    return next(new ErrorHandler('Month not found', 404));
  }

  res.status(200).json({
    success: true,
    month: rows[0],
  });
});

const updateMonth = asyncCall(async (req, res, next) => {
  let { newHour, idToUpdate } = req.body;

  if (!newHour || !idToUpdate) {
    return next(new ErrorHandler('Please provide a valid data!', 403));
  }

  let month;
  let monthIndex;

  res.status(200).json({
    success: true,
    month,
  });
});

const deleteMonth = asyncCall(async (req, res, next) => {
  let month;
  if (!month) {
    return next(new ErrorHandler('File not found!', 404));
  }
  await month.remove();

  res.status(200).json({
    success: true,
    message: 'File deleted!',
  });
});

module.exports = {
  getAllMonths,
  getSingleMonth,
  updateMonth,
  deleteMonth,
  createMonth,
};
