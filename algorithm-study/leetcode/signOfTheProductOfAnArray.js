/**
 * EASY
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  const multiple = nums.reduce((acc, cur) => acc * cur, 1);

  if (multiple > 0) return 1;
  else if (multiple < 0) return -1;

  return 0;
};
