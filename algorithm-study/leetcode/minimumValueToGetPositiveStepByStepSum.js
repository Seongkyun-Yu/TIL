/**
 * EASY
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let startValue = 1;
  let acc = 1;
  for (const num of nums) {
    acc += num;

    if (acc < 1) {
      startValue += Math.abs(acc) + 1;
      acc += Math.abs(acc) + 1;
    }
  }

  return startValue;
};
