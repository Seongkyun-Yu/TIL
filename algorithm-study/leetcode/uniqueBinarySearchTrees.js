/**
 * MEDIUM
 * https://leetcode.com/problems/unique-binary-search-trees/
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const numTree = new Array(n + 1).fill(1);

  for (let nodes = 2; nodes <= n; nodes++) {
    let total = 0;
    for (let root = 1; root <= nodes; root++) {
      const left = root - 1;
      const right = nodes - root;
      total += numTree[left] * numTree[right];
    }
    numTree[nodes] = total;
  }

  return numTree[n];
};
