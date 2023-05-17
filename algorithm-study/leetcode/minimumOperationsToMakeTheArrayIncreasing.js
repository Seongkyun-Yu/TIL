/**
 * EASY
 * https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let ops = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      ops += nums[i] - nums[i + 1] + 1;
      nums[i + 1] += nums[i] - nums[i + 1] + 1;
    }
  }
  return ops;
};
