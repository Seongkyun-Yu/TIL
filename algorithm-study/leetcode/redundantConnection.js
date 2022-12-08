/**
 * MEDIUM
 * https://leetcode.com/problems/redundant-connection/description/
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const visited = {};
  const result = {};
  const graph = {};

  for (const [edge1, edge2] of edges) {
    if (graph[edge1]) graph[edge1].push(edge2);
    else graph[edge1] = [edge2];

    if (graph[edge2]) graph[edge2].push(edge1);
    else graph[edge2] = [edge1];
  }

  const dfs = (prev, i) => {
    if (visited[i]) return (result[`${prev}-${i}`] = true);
    if (!graph[i]) return;

    visited[i] = true;
    for (edge of graph[i]) {
      if (edge === prev) continue;
      dfs(i, edge);
    }
    visited[i] = false;
  };

  const keys = Object.keys(graph);
  for (let i = 1; i < keys.length; i++) {
    dfs(null, i);
  }

  for (let i = edges.length - 1; i >= 0; i--) {
    const [edge1, edge2] = edges[i];
    if (result[`${edge1}-${edge2}`] || result[`${edge2}-${edge1}`])
      return [edge1, edge2];
  }
};
