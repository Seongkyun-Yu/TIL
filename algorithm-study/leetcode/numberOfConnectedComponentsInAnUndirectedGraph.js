/**
 * MEDIUM
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const visited = {};
  const graph = {};
  for (const [from, to] of edges) {
    if (graph[from]) graph[from].push(to);
    else graph[from] = [to];

    if (graph[to]) graph[to].push(from);
    else graph[to] = [from];
  }

  const dfs = (i) => {
    if (visited[i]) return;
    visited[i] = true;
    if (!graph[i]) return;

    for (const node of graph[i]) {
      dfs(node);
    }
  };

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i);
    count++;
  }

  return count;
};
