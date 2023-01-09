/**
 * EASY
 * https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) continue;
      if ((i * j) % k) continue;
      count++;
    }
  }

  return count;
};
