const User = require("../model/User");
const ErrorHandler = require("../utils/error");
const asyncCall = require("../utils/asyncCall");

function sendTokenResponse(user, statusCode, res) {
  let token = user.getSignetJwt();
  const options = {
    expires: new Date(Date.now() * 24 * 60 * 60 * 10000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV == "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    sucess: true,
    token,
    username: user.username,
    email: user.email,
  });
}

const register = asyncCall(async (req, res, next) => {
  const { username, password, email } = req.body;

  const user = await User.create({
    username,
    password,
    email,
  });

  sendTokenResponse(user, 201, res);
});

const login = asyncCall(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("User does not exist!", 404));
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return next(new ErrorHandler("Wrong password!", 403));
  }

  sendTokenResponse(user, 200, res);
});

const logout = asyncCall(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 100),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Loged out successfully",
  });
});

module.exports = {
  register,
  login,
  logout,
};
