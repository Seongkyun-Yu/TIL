/**
 * MEDIUM
 * https://leetcode.com/problems/path-with-maximum-probability/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const weights = {};
  const graph = {};
  const visit = {};

  for (let i = 0; i < edges.length; i++) {
    const [node1, node2] = edges[i];

    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];

    graph[node1].push([node2, succProb[i]]);
    graph[node2].push([node1, succProb[i]]);
  }

  for (let i = 0; i < n; i++) {
    if (i === start) {
      weights[i] = 1;
      continue;
    }
    weights[i] = -Infinity;
  }

  const queue = [start];
  while (queue.length) {
    const curNode = queue.shift();
    const gList = graph[curNode];
    visit[curNode] = true;
    if (!gList) continue;

    for (const [node, weight] of gList) {
      if (visit[node]) continue;
      if (weights[node] < weights[curNode] * weight) {
        weights[node] = weights[curNode] * weight;
      }
      queue.push(node);
    }

    console.log({ curNode, queue, visit, gList, weights });

    if (curNode === end) return weights[curNode];
  }

  return 0;
};
