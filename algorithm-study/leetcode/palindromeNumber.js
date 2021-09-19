/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const stringX = x.toString();
  const len = stringX.length;

  for (let i = 0; i < len / 2; i++) {
    if (stringX[i] !== stringX[len - i - 1]) return false;
  }

  return true;
};
