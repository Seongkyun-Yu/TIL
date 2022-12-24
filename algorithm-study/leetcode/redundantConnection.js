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

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const parent = new Array(edges.length + 1).fill(0).map((_, i) => i);
  const rank = new Array(edges.length + 1).fill(1);

  const findP = (n) => {
    p = parent[n];
    while (p != parent[p]) {
      parent[p] = parent[parent[p]];
      p = parent[p];
    }

    return p;
  };

  const union = (n1, n2) => {
    const p1 = findP(n1);
    const p2 = findP(n2);

    if (p1 === p2) return false;
    if (rank[p1] > rank[p2]) {
      parent[p2] = p1;
      rank[p2] += rank[p1];
    } else {
      parent[p1] = p2;
      rank[p2] += rank[p1];
    }

    return true;
  };

  for ([n1, n2] of edges) {
    if (!union(n1, n2)) return [n1, n2];
  }
};
