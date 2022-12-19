/**
 * EASY
 * https://leetcode.com/problems/largest-unique-number/description/
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
  const count = {};
  for (const num of nums) {
    count[num] = count[num] + 1 || 1;
  }

  let max = -Infinity;
  for (const key in count) {
    if (count[key] > 1) continue;
    max = Math.max(+key, max);
  }

  return max === -Infinity ? -1 : max;
};
