/**
 * https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let cnt = 0;
  for (let i = 1; i < nums.length && cnt < 2; i++) {
    if (nums[i - 1] >= nums[i]) {
      cnt++;
      if (i > 1 && nums[i - 2] >= nums[i]) {
        nums[i] = nums[i - 1];
      }
    }
  }

  return cnt < 2;
};
