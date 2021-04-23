const Month = require("../model/Month");
const ErrorHandler = require("../utils/error");
const asyncCall = require("../utils/asyncCall");

const getAllMonths = asyncCall(async (req, res, next) => {
  let months = await Month.find({ user: req.user._id });
  if (months.length < 1) {
    return next(new ErrorHandler("There is nothing to show yet", 404));
  }

  res.status(200).json({
    success: true,
    months,
  });
});

module.exports = {
  getAllMonths,
};
