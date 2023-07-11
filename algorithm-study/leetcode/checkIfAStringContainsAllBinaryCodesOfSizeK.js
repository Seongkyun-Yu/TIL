/**
 * MEDIUM
 * https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  const cache = new Set();

  const sList = [...s];

  for (let i = 0, j = k; j <= s.length; i++, j++) {
    cache.add(sList.slice(i, j).join(''));
  }

  return cache.size === 2 ** k;
};
