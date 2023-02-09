/**
 * MEDIUM
 * https://leetcode.com/problems/single-number-iii/
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  if (nums.length === 2) return nums;

  nums.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
      continue;
    }

    result.push(nums[i]);
  }

  if (result.length === 1) result.push(nums[nums.length - 1]);

  return result;
};
