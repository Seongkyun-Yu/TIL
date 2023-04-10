/**
 * MEDIUM
 * https://leetcode.com/problems/all-paths-from-source-to-target/
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];
  const visit = [];

  const dfs = (node, acc) => {
    if (visit[node]) return;
    if (node === graph.length - 1) return result.push([...acc, node]);

    visit[node] = true;
    acc.push(node);

    const nextNodes = graph[node];
    for (let i = 0; i < nextNodes.length; i++) {
      dfs(nextNodes[i], acc);
    }

    visit[node] = false;
    acc.pop();

    return;
  };

  dfs(0, []);

  return result;
};
