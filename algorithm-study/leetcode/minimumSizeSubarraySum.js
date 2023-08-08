/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLen = Infinity;
  let sum = 0;

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      minLen = Math.min(minLen, i - j + 1);
      sum -= nums[j];
      j++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

var minSubArrayLen2 = function (target, nums) {
  let len = Infinity;
  let sum = 0;
  let left = 0;
  let right = 0;
  while (left <= right && right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      len = Math.min(right - left + 1, len);
      sum -= nums[left];
      left++;
    }

    right++;
  }

  return len === Infinity ? 0 : len;
};
