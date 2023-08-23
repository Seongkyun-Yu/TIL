/**
 * EASY
 * https://leetcode.com/problems/ugly-number/
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;

  let target = n;
  for (const num of [2, 3, 5]) {
    while (target % num === 0) {
      target /= num;
    }
  }

  return target === 1;
};
