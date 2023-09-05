/**
 * EASY
 * https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const arr = Array(num.length).fill(0);

  for (const char of num) {
    arr[Number(char)]++;
  }

  return arr.join('') === num;
};
