/**
 * MEDIUM
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const cache = {};

  const dfs = (i, buying) => {
    if (i >= prices.length) return 0;
    if (cache[`${i}-${buying}`]) return cache[`${i}-${buying}`];

    const coolDown = dfs(i + 1, buying);

    if (buying) {
      const buy = dfs(i + 1, !buying) - prices[i];
      cache[`${i}-${buying}`] = Math.max(buy, coolDown);
    } else {
      const sell = dfs(i + 2, !buying) + prices[i];
      cache[`${i}-${buying}`] = Math.max(sell, coolDown);
    }

    return cache[`${i}-${buying}`];
  };

  return dfs(0, true);
};
