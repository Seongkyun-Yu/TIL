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
  const dfs = (node, acc, count) => {
    if (visit[node]) return;

    let alreadySum = false;
    if (count === seats) {
      accFuel += acc;
      count = 0;
      acc = 1;
      alreadySum = true;
    }

    visit[node] = true;

    const list = graph[node];
    let visitCount = 0;
    for (const next of list) {
      if (visit[next]) continue;
      dfs(next, acc + 1, count + 1);
      visitCount++;
    }

    if (!visitCount && !alreadySum) {
      accFuel += acc;
    }
  };

  dfs(0, 0, 0);

  return accFuel;
};
