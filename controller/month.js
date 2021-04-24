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

const createMonth = asyncCall(async (req, res, next) => {
  let month = await Month.create(req.body);
  res.status(201).json({
    success: true,
    month,
  });
});

module.exports = {
  getAllMonths,
  deleteMonth,
  createMonth,
};
