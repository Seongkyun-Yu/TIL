/**
 * EASY
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let max = -Infinity;
  let maxNum = 0;
  let count = {};
  for (const num of arr) {
    count[num] = count[num] + 1 || 1;
    if (max < count[num]) {
      max = count[num];
      maxNum = num;
    }
  }

  return maxNum;
};
