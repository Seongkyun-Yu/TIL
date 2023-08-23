/**
 * MEDIUM
 * https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  if (!roads.length) return 0;

  const visit = {};
  const graph = {};
  for (const [from, to] of roads) {
    if (graph[from]) graph[from].push(to);
    else graph[from] = [to];

    if (graph[to]) graph[to].push(from);
    else graph[to] = [from];
  }

  let accFuel = 0;
  const dfs = (node, parent, person) => {
    for (next of graph[node]) {
      if (parent === next) continue;
    }
  };

  dfs(0, 0, 0);

  return accFuel;
};
