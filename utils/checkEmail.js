module.exports = function (data) {
  let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regEx.test(data)) {
    return false;
  }

  return data;
};
