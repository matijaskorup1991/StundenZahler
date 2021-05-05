const jwt = require('jsonwebtoken');

module.exports = function (userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: 36000,
  });
};
