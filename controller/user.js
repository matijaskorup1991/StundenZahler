const User = require("../model/User");
const { ErrorHandler } = require("../utils/error");
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

module.exports = {
  register,
};
