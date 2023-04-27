/**
 * EASY
 * https://leetcode.com/problems/monotonic-array/
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  const posi = () => {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) return false;
    }
    return true;
  };

  const nega = () => {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] < nums[i]) return false;
    }
    return true;
  };

  return posi() || nega();
};
