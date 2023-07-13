/**
 * EASY
 * https://leetcode.com/problems/largest-subarray-length-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var largestSubarray = function (nums, k) {
  let max = 0;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i + k - 1 >= nums.length) break;

    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }

  return nums.slice(index, index + k);
};
