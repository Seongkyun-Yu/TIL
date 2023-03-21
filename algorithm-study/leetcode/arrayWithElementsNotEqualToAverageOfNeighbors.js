/**
 * MEDIUM
 * https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  let left = 0;
  let right = nums.length - 1;
  while (result.length !== nums.length) {
    result.push(nums[left]);
    left++;

    if (left <= right) {
      result.push(nums[right]);
      right--;
    }
  }

  return result;
};
