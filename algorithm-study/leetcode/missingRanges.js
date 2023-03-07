/**
 * EASY
 * https://leetcode.com/problems/missing-ranges/
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  const range = (lower, upper) => {
    if (lower === upper) return String(lower);
    return lower + '->' + upper;
  };

  const result = [];
  let prev = lower - 1;
  for (let i = 0; i <= nums.length; i++) {
    const cur = i < nums.length ? nums[i] : upper + 1;

    if (prev + 1 <= cur - 1) result.push(range(prev + 1, cur - 1));
    prev = cur;
  }

  return result;
};
