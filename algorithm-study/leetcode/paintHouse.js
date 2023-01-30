/**
 * MEDIUM
 * https://leetcode.com/problems/paint-house/
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const cache = {};

  const dfs = (i, level) => {
    if (cache[`${level}-${i}`]) return cache[`${level}-${i}`];
    if (level > costs.length - 1) return 0;

    let acc = costs[level][i];
    if (i === 0) {
      acc += Math.min(dfs(1, level + 1), dfs(2, level + 1));
    } else if (i === 1) {
      acc += Math.min(dfs(0, level + 1), dfs(2, level + 1));
    } else {
      acc += Math.min(dfs(0, level + 1), dfs(1, level + 1));
    }

    cache[`${level}-${i}`] = acc;

    return acc;
  };

  let min = Infinity;
  for (let i = 0; i < 3; i++) {
    min = Math.min(min, dfs(i, 0));
  }

  return min;
};
