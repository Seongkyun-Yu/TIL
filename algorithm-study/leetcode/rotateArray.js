/**
 * MEDIUM
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const result = [];
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    result[(i + k) % len] = nums[i];
  }

  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }
};

var rotate = function (nums, k) {
  if (nums.length < 2) return nums;
  nums.reverse();

  if (nums.length <= k) k %= nums.length;

  let left = 0;
  let right = k - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  left = k;
  right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
};
