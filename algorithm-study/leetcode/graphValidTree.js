/**
 * MEDIUM
 * https://leetcode.com/problems/graph-valid-tree/
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  const visited = {};
  const graph = {};

  for (const [from, to] of edges) {
    if (graph[from]) graph[from].push(to);
    else graph[from] = [to];

    if (graph[to]) graph[to].push(from);
    else graph[to] = [from];
  }

  const dfs = (prev, i) => {
    if (visited[i]) return false;

    visited[i] = true;
    for (const edge of graph[i]) {
      if (edge === prev) continue;
      if (!dfs(i, edge)) return false;
    }
    visited[i] = false;

    return true;
  };

  for (let i = 0; i < n; i++) {
    if (!graph[i]) return false;
    if (!dfs(null, i)) return false;
  }

  return true;
};
