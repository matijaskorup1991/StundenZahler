module.exports = function (data) {
  if (data.trim() === '' || data.length < 1) return false;

  let input = data.trim();
  return input.charAt(0).toUpperCase() + input.substring(1);
};
