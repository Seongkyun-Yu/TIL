/**
 * MEDIUM
 * https://leetcode.com/problems/continuous-subarray-sum/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const cache = {};
  cache[0] = -1;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    sum += num;
    if (cache[sum % k] !== undefined) {
      if (Math.abs(i - cache[sum % k]) >= 2) return true;
      else continue;
    }
    cache[sum % k] = i;
  }

  return false;
};
