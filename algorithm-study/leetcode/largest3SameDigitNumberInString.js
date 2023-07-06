/**
 * EASY
 * https://leetcode.com/problems/largest-3-same-digit-number-in-string/
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  const matches = new Set([
    '999',
    '888',
    '777',
    '666',
    '555',
    '444',
    '333',
    '222',
    '111',
    '000',
  ]);

  for (const match of matches) {
    if (num.includes(match)) return match;
  }

  return '';
};
