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
    let isUp = false;
    for (let i = 0; i < nums.length - 1; i++) {
      isUp = !isUp;
      if (isUp && nums[i] <= nums[i + 1]) continue;
      if (!isUp && nums[i] >= nums[i + 1]) continue;

      const temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
      change = true;
    }

    changed = change;
  }
};
