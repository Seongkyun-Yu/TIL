/**
 * MEDIUM
 * https://leetcode.com/problems/find-closest-node-to-given-two-nodes/
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  if (node1 === node2) return 0;

  const dist1 = {};
  const dist2 = {};
  dist1[node1] = 0;
  dist2[node2] = 0;

  const dfs = (idx, acc, cache) => {
    if (edges[idx] === -1) return false;

    cache[edges[idx]] = acc + 1;

    return dfs(edges[idx], acc + 1, cache);
  };
  dfs(node1, 0, dist1);
  dfs(node2, 0, dist2);

  let max = -1;
  for (const key in dist1) {
    if (!dist2[key]) continue;

    max = Math.max(Math.max(dist2[key], dist1[key]), max);
  }
  for (const key in dist2) {
    if (!dist1[key]) continue;

    max = Math.max(Math.max(dist2[key], dist1[key]), max);
  }

  return max;
};
