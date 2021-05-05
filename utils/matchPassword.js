const bcrypt = require('bcryptjs');

module.exports = async function (enteredPassword, userPassword) {
  return await bcrypt.compare(enteredPassword, userPassword);
};
