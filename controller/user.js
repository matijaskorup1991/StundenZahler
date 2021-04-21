const User = require("../model/User");
const { ErrorHandler } = require("../utils/error");

const getAllUsers = async (req, res, next) => {
  try {
    let users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    return next(error);
  }
};

const register = async (req, res, next) => {
  try {
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
  } catch (err) {
    console.log(err.errors);
    next(err);
  }
};

module.exports = {
  register,
  getAllUsers,
};
