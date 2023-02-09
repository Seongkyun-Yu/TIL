/**
 * MEDIUM
 * https://leetcode.com/problems/3sum-smaller/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
  if (nums.length < 3) return 0;

  nums.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < target) {
        count += k - j;
        j++;
      } else {
        k--;
      }
    }
  }

  return count;
};
