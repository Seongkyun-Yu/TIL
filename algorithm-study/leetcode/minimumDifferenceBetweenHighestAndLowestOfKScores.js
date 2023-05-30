/**
 * EASY
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);

  let minDiff = Infinity;

  let left = 0;
  let right = k - 1;
  while (right < nums.length) {
    minDiff = Math.min(minDiff, nums[right] - nums[left]);

    left++;
    right++;
  }

  return minDiff;
};
