/**
 * MEDIUM
 * https://leetcode.com/problems/graph-valid-tree/
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (n === 1) return true;
  const visited = {};
  const graph = {};

  for (const [from, to] of edges) {
    if (graph[from]) graph[from].push(to);
    else graph[from] = [to];

    if (graph[to]) graph[to].push(from);
    else graph[to] = [from];
  }

  let visitCount = 0;
  const dfs = (prev, i, acc) => {
    if (visited[i]) return false;
    console.log(i);
    visited[i] = true;
    visitCount++;

    for (const edge of graph[i]) {
      if (edge === prev) continue;
      if (!dfs(i, edge, acc + 1)) return false;
    }

    return true;
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    if (!graph[i]) return false;
    if (!dfs(null, i)) return false;
    if (visitCount !== n) return false;
  }

  return true;
};
