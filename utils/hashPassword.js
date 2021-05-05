const bcrypt = require('bcryptjs');

module.exports = async function (data) {
  const salt = await bcrypt.genSalt(10);
  let password = await bcrypt.hash(data, salt);
  return password;
};
