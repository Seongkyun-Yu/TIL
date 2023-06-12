/**
 * MEDIUM
 * https://leetcode.com/problems/integer-break/
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const cache = { 1: 1 };

  const dfs = (num) => {
    if (cache[num]) return cache[num];

    cache[num] = num === n ? 0 : num;
    for (let i = 1; i < num; i++) {
      const temp = dfs(i) * dfs(num - i);
      cache[num] = Math.max(cache[num], temp);
    }

    return cache[num];
  };

  return dfs(n);
};
