/**
 * MEDIUM
 * https://leetcode.com/problems/132-pattern/
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  if (nums.length < 3) return false;

  let min = nums[0];
  let max = nums[nums.length - 1];

  const leftMin = [min];
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    leftMin.push(min);
  }

  const rightMax = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    // if (nums[i] > leftMin[i]) {
    max = Math.min(max, nums[i]);
    rightMax.unshift(max);
    // }
    // else rightMax.push(Infinity);
    // max = Math.max(max, nums[i]);
    // rightMax.unshift(max);
  }

  console.log({ leftMin, rightMax });

  for (let i = 1; i < nums.length - 1; i++) {
    console.log(i, leftMin[i - 1], nums[i], rightMax[i + 1]);
    if (
      leftMin[i - 1] < nums[i] &&
      nums[i] > rightMax[i + 1] &&
      leftMin[i - 1] < rightMax[i + 1]
    ) {
      return true;
    }
  }

  return false;
};
