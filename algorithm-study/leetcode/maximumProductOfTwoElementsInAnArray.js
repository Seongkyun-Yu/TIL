/**
 * EASY
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/ *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.sort((a, b) => b - a);

  return (nums[0] - 1) * (nums[1] - 1);
};
