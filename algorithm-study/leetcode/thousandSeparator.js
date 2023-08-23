/**
 * EASY
 * https://leetcode.com/problems/thousand-separator/
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let result = '';
  let dotCount = 0;
  const s = n + '';
  for (let i = s.length - 1; i >= 0; i--) {
    const len = result.length - dotCount;
    if (len % 3 === 0 && len >= 3) {
      result = '.' + result;
      dotCount++;
    }

    result = s[i] + result;
  }

  return result;
};
