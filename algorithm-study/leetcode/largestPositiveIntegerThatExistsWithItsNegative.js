/**
 * EASY
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let result = -1;
  const counter = {};

  for (const num of nums) {
    if (counter[-num]) result = Math.max(result, Math.abs(num));
    counter[num] = counter[num] + 1 || 1;
  }

  return result;
};
