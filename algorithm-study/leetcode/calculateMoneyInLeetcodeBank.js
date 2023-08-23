/**
 * EASY
 * https://leetcode.com/problems/calculate-money-in-leetcode-bank/
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let total = 0;
  let start = 1;
  let sum = 1;
  let count = 1;
  for (let i = 0; i < n; i++) {
    total = total + sum;
    sum = sum + 1;
    count = count + 1;

    if (count > 7) {
      start = start + 1;
      sum = start;
      count = 1;
    }
  }

  return total;
};
