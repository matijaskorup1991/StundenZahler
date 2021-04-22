const User = require("../model/User");
const { ErrorHandler } = require("../utils/error");
const asyncCall = require("../utils/asyncCall");

const register = asyncCall(async (req, res, next) => {
  const { username, password, email } = req.body;

  const user = await User.create({
    username,
    password,
    email,
  });

  res.status(201).json({
    success: true,
    name: user.username,
    email: user.email,
    _id: user._id,
  });
});

module.exports = {
  register,
  getAllUsers,
};
