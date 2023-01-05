/**
 * HARD
 * https://leetcode.com/problems/k-inverse-pairs-array/
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  const cache = {};
  const dfs = (n, k) => {
    if (n === 0) return 0;
    if (k === 0) return 1;
    if (cache[`${n}-${k}`]) return cache[`${n}-${k}`];

    let result = 0;
    const len = Math.min(k, n - 1);
    for (let i = 0; i <= len; i++) {
      result = (result + dfs(n - 1, k - i)) % 1000000007;
    }
    cache[`${n}-${k}`] = result;

    return result;
  };

  return dfs(n, k);
};
