/**
 * https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let count0 = 0;
  let count1 = 0;
  let max0 = 0;
  let max1 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 0) {
      count1 = 0;
      count0++;
      max0 = Math.max(max0, count0);
    } else {
      count0 = 0;
      count1++;
      max1 = Math.max(max1, count1);
    }
  }

  return max1 > max0;
};
