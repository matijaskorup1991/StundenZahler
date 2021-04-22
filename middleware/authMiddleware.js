const ErrorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const asyncCall = require("../utils/asyncCall");

const protect = asyncCall(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookie.token) {
    token = req.cookie.token;
  }

  if (!token) {
    return next(
      new ErrorHandler("You are not authorized to access this route!", 403)
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);
  next();
});

module.exports = {
  protect,
};
