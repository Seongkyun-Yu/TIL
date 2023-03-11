/**
 * HARD
 * https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) nums[i] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (num < 1) continue;
    if (num > nums.length) continue;

    if (nums[num - 1] > 0) nums[num - 1] *= -1;
    else if (nums[num - 1] === 0) nums[num - 1] = -1 * (nums.length + 1);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] >= 0) return i;
  }

  return nums.length + 1;
};
