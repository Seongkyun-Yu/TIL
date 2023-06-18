/**
 * MEDIUM
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid - 1] !== nums[mid] && nums[mid + 1] !== nums[mid]) {
      return nums[mid];
    }

    const leftSize = nums[mid - 1] === nums[mid] ? mid - 1 : mid;

    if (leftSize % 2) right = mid - 1;
    else left = mid + 1;
  }
};
