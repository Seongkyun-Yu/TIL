/**
 * MEDIUM
 * https://leetcode.com/problems/find-peak-element/
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    const iLeft = i - 1 < 0 ? -Infinity : nums[i - 1];
    const iRight = i + 1 >= nums.length ? -Infinity : nums[i + 1];
    if (iLeft < nums[i] && nums[i] > iRight) return i;

    const jLeft = j - 1 < 0 ? -Infinity : nums[j - 1];
    const jRight = j + 1 >= nums.length ? -Infinity : nums[j + 1];
    if (jLeft < nums[j] && nums[j] > jRight) return j;

    i++;
    j--;
  }
};
