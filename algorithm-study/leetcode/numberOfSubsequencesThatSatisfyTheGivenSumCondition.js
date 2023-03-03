/**
 * MEDIUM
 * https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b);

  const mod = BigInt(10 ** 9 + 7);
  let result = BigInt(0);

  let right = nums.length - 1;
  for (let left = 0; left < nums.length; left++) {
    while (nums[left] + nums[right] > target && left <= right) {
      right--;
    }

    if (left <= right) {
      result += BigInt(2) ** BigInt(right - left);
      result %= mod;
    }
  }

  return result;
};
