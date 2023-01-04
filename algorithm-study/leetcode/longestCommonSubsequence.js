/**
 * MEDIUM
 * https://leetcode.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const cache = [];
  for (let i = 0; i <= text1.length + 1; i++) {
    const arr2 = new Array(text2.length + 1).fill(0);
    cache.push(arr2);
  }

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) cache[i][j] = 1 + cache[i + 1][j + 1];
      else cache[i][j] = Math.max(cache[i][j + 1], cache[i + 1][j]);
    }
  }

  return cache[0][0];
};
