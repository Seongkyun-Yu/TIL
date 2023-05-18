/**
 * EASY
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let result = 0;
  let rCount = 0;
  let lCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') rCount++;
    else lCount++;

    if (rCount === lCount) {
      result++;
      rCount = 0;
      lCount = 0;
    }
  }

  return result;
};
