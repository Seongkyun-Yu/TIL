/**
 * EASY
 * https://leetcode.com/problems/counting-elements/
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  const nums = {};
  for (const num of arr) {
    nums[num] = true;
  }

  let count = 0;
  for (const num of arr) {
    if (nums[num + 1]) count++;
  }

  return count;
};
