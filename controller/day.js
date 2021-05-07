const db = require('../db');
const ErrorHandler = require('../utils/error');
const asyncCall = require('../utils/asyncCall');

const getAllDays = asyncCall(async (req, res, next) => {
  let {
    rows,
  } = await db.query(
    'select * from days where user_id = $1 order by day desc',
    [req.user.id]
  );
  if (rows.length < 1) {
    return next(new ErrorHandler('There is nothing to show yet', 404));
  }

  res.status(200).json({
    success: true,
    days: rows,
    count: rows.length,
  });
});

const createDay = asyncCall(async (req, res, next) => {
  let { date, hours } = req.body;

  if (!date || !hours) {
    return next(new ErrorHandler('Please provide all Information!', 401));
  }

  let {
    rows,
  } = await db.query(
    'insert into days (day, hour, user_id) values ($1,$2,$3)',
    [date, hours, req.user.id]
  );
  res.status(201).json({
    success: true,
    day: rows[0],
  });
});

const getDay = asyncCall(async (req, res, next) => {
  let { rows } = await db.query('select * from days where id=$1', [
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

const updateDay = asyncCall(async (req, res, next) => {
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

const deleteDay = asyncCall(async (req, res, next) => {
  let month = await db.query('delete from days where id=$1', [req.params.id]);
  if (!req.params.id) {
    return next(new ErrorHandler('File not found!', 404));
  }

  res.status(200).json({
    success: true,
    message: 'File deleted!',
  });
});

module.exports = {
  getAllDays,
  getDay,
  updateDay,
  deleteDay,
  createDay,
};
