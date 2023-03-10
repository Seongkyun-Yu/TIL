/**
 * MEDIUM
 * https://leetcode.com/problems/largest-number/
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    if (a + '' + b > b + '' + a) return -1;
    else return 1;
  });

  return BigInt(nums.join('')) + '';
};
