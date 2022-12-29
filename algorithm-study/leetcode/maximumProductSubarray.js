/**
 * MEDIUM
 * https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = nums[0];
  let max = 1;
  let min = 1;

  for (const num of nums) {
    const tempMax = max * num;
    max = Math.max(num * max, num * min, num);
    min = Math.min(tempMax, num * min, num);
    result = Math.max(result, max);
  }

  return result;
};
