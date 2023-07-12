/**
 * MEDIUM
 * https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  const cache = new Set();

    const sList = [];
    for(let i = 0; i < k; i++) {
        sList.push(s[i]);
    }

    for(let i = 0, j = k; j <= s.length; i++, j++) {
        cache.add(sList.join(""));
        sList.shift();
        sList.push(s[j]);
    }

    return cache.size === 2 ** k
};
