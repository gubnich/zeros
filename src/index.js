module.exports = function getZerosCount(number) {
  if(number < 1 || number > 1E8) return 0;
  number = parseInt(number / 5);
  return number += getZerosCount(number);
}
