const Month = require("../model/Month");
const ErrorHandler = require("../utils/error");
const asyncCall = require("../utils/asyncCall");

const getAllMonths = asyncCall(async (req, res, next) => {
  let months = await Month.find({ user: req.user._id }).sort({ createdAt: -1 });
  if (months.length < 1) {
    return next(new ErrorHandler("There is nothing to show yet", 404));
  }

  res.status(200).json({
    success: true,
    months,
    count: months.length,
  });
});

const createMonth = asyncCall(async (req, res, next) => {
  let month = await Month.create(req.body);
  res.status(201).json({
    success: true,
    month,
  });
});

const getSingleMonth = asyncCall(async (req, res, next) => {
  let month = await Month.findById(req.params.id);
  if (!month) {
    return next(new ErrorHandler("Month not found", 404));
  }

  res.status(200).json({
    success: true,
    month,
  });
});

const updateMonth = asyncCall(async (req, res, next) => {
  let { newHour, idToUpdate } = req.body;

  if (!newHour || !idToUpdate) {
    return next(new ErrorHandler("Please provide a valid data!", 403));
  }

  let month = await Month.findById(req.params.id);
  let monthIndex = month.hours.findIndex((el) => el._id == idToUpdate);

  month.hours[monthIndex].hour = newHour;

  await month.save();

  res.status(200).json({
    success: true,
    month,
  });
});

const deleteMonth = asyncCall(async (req, res, next) => {
  let month = await Month.findById(req.params.id);
  if (!month) {
    return next(new ErrorHandler("File not found!", 404));
  }
  await month.remove();

  res.status(200).json({
    success: true,
    message: "File deleted!",
  });
});

module.exports = {
  getAllMonths,
  getSingleMonth,
  updateMonth,
  deleteMonth,
  createMonth,
};
