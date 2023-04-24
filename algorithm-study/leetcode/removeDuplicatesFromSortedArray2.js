/**
 * MEDIUM
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    let count = 1;
    while (r + 1 < nums.length && nums[r] == nums[r + 1]) {
      r++;
      count++;
    }

    for (let i = 0; i < Math.min(count, 2); i++) {
      nums[l] = nums[r];
      l++;
    }

    r += 1;
  }

  return l;
};
