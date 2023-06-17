/**
 * EASY
 * https://leetcode.com/problems/number-of-common-factors/
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  const max = Math.min(a, b);

  let count = 0;
  for (let i = 1; i <= max; i++) {
    if (a % i) continue;
    if (b % i) continue;

    count++;
  }

  return count;
};
