/**
 * EASY
 * https://leetcode.com/problems/second-largest-digit-in-a-string/
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let first = -1;
  let second = -1;

  for (const c of s) {
    const num = +c;
    if (isNaN(num)) continue;

    if (first < num) {
      second = first;
      first = num;
    } else if (second < num && num < first) {
      second = num;
    }
  }

  return second;
};
