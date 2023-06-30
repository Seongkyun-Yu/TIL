/**
 * MEDIUM
 * https://leetcode.com/problems/wiggle-sort/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let changed = true;
  while (changed) {
    let change = false;
    let isUp = true;
    for (let i = 0; i < nums.length - 1; i++) {
      if (isUp) {
        if (nums[i] > nums[i + 1]) {
          const temp = nums[i];
          nums[i] = nums[i + 1];
          nums[i + 1] = temp;
          change = true;
        }
      } else {
        if (nums[i] < nums[i + 1]) {
          const temp = nums[i];
          nums[i] = nums[i + 1];
          nums[i + 1] = temp;
          change = true;
        }
      }

      isUp = !isUp;
    }
    changed = change;
  }
};
