/**
 * MEDIUM
 * https://leetcode.com/problems/unique-paths/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const cache = [];
  for (let i = 0; i < m; i++) {
    cache.push([]);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i <= 0 || j <= 0) {
        cache[i][j] = 1;
        continue;
      }

      cache[i][j] = cache[i - 1][j] + cache[i][j - 1];
    }
  }

  return cache[m - 1][n - 1];
};
