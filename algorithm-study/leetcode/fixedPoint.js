/**
 * EASY
 * https://leetcode.com/problems/fixed-point/
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr[i]) return i;
  }
  return -1;
};
