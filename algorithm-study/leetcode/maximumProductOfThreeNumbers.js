/**
 * EASY
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const sorted = nums.sort((a, b) => a - b);

  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3],
  );
};
