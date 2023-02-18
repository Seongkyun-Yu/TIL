/**
 * MEDIUM
 * https://leetcode.com/problems/132-pattern/
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  if (nums.length < 3) return false;

  let min = nums[0];
  const leftMin = [min];
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    leftMin.push(min);
  }

  const stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] <= leftMin[i]) continue;

    while (stack.length && stack[stack.length - 1] <= leftMin[i]) {
      stack.pop();
    }

    if (stack[stack.length - 1] < nums[i]) return true;

    stack.push(nums[i]);
  }

  return false;
};
