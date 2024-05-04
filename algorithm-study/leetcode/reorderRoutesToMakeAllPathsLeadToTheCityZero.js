/**
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  let result = 0;

  const oneWayLoad = {};
  const twoWayLoad = {};
  for (const connection of connections) {
    const [start, dest] = connection;

    if (oneWayLoad[start]) oneWayLoad[start].push(dest);
    else oneWayLoad[start] = [dest];

    if (twoWayLoad[start]) twoWayLoad[start].push(dest);
    else twoWayLoad[start] = [dest];
    if (twoWayLoad[dest]) twoWayLoad[dest].push(start);
    else twoWayLoad[dest] = [start];
  }

  const dfs = (start, prev) => {
    const dests = twoWayLoad[start];
    for (const dest of dests) {
      if (dest === prev) continue;
      if (oneWayLoad[start] && oneWayLoad[start].includes(dest)) result++;
      dfs(dest, start);
    }
  };

  dfs(0, null);

  return result;
};
