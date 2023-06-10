/**
 * MEDIUM
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const cache = {};
  const passDay = [1, 7, 30];

  const dfs = (idx) => {
    if (idx === days.length) return 0;
    if (cache[idx]) return cache[idx];

    cache[idx] = Infinity;
    for (let i = 0; i < costs.length; i++) {
      const day = passDay[i];
      const cost = costs[i];

      let j = idx;
      while (j < days.length && days[j] < days[idx] + day) {
        j++;
      }

      cache[idx] = Math.min(cache[idx], cost + dfs(j));
    }

    return cache[idx];
  };

  return dfs(0);
};
