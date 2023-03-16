/**
 * EASY
 * https://leetcode.com/problems/set-mismatch/
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const max = Math.max(Math.max(...nums), nums.length);

  const result = [];
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) result.push(num);
    else set.add(num);
  }

  for (let i = 1; i <= max; i++) {
    if (!set.has(i)) {
      result.push(i);
      return result;
    }
  }
};
