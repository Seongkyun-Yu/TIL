/**
 * EASY
 * https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  nums.sort((a, b) => a - b);

  let sum = 0;
  let last = nums[nums.length - 1];
  for (let i = 0; i < k; i++) {
    sum += last;
    last++;
  }

  return sum;
};
