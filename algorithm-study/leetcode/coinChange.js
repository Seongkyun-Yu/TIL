/**
 * MEDIUM
 * https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const cache = {};
  const dfs = (rest) => {
    if (rest === 0) return 0;
    if (cache[rest]) return cache[rest];
    if (rest < 0) return Infinity;

    let min = Infinity;
    for (let i = 0; i < coins.length; i++) {
      const res = dfs(rest - coins[i]);
      min = Math.min(min, 1 + res);
    }
    cache[rest] = min;

    return min;
  };

  const result = dfs(amount, 0);
  return result === Infinity ? -1 : result;
};
