/**
 * EASY
 * https://leetcode.com/problems/missing-number-in-arithmetic-progression/
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function (arr) {
  const diff = (arr[arr.length - 1] - arr[0]) / arr.length;

  if (diff === 0) return arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return arr[i] - diff;
  }
};
