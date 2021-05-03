const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function validateEmail(email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Username is required"],
    minLength: 3,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validateEmail, "Please provide a valid Email"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 6,
    trim: true,
    select: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getSignetJwt = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: 36000,
  });
};

UserSchema.methods.comparePassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    return next(error);
  }
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
