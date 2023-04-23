/**
 * EAST
 * https://leetcode.com/problems/two-sum-less-than-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
  const sorted = nums.sort((a, b) => a - b);

  let result = -1;
  let low = 0;
  let high = sorted.length - 1;
  while (low < high) {
    const num = nums[low] + nums[high];

    if (num < k) {
      result = Math.max(num, result);
    }

    if (num < k) low++;
    else high--;
  }

  return result;
};
