/**
 * EASY
 * https://leetcode.com/problems/divide-array-into-equal-pairs/
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const count = {};
  for (const num of nums) {
    count[num] = count[num] + 1 || 1;
  }

  let result = 0;
  for (const key in count) {
    if (count[key] % 2) return false;
    result += count[key] / 2;
  }

  return nums.length / 2 === result;
};
