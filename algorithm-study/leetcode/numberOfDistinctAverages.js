/**
 * EASY
 * https://leetcode.com/problems/number-of-distinct-averages/
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  nums.sort((a, b) => a - b);

  const counter = new Set();
  while (nums.length) {
    const min = nums.shift();
    const max = nums.pop();

    const avg = (max + min) / 2;
    counter.add(avg);
  }

  return counter.size;
};
