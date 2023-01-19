/**
 * MEDIUM
 * https://leetcode.com/problems/spiral-matrix-ii/
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const visited = {};
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  const direct = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const dfs = (i, j, path, acc) => {
    if (i < 0 || i > n - 1) return;
    if (j < 0 || j > n - 1) return;
    if (visited[`${i}-${j}`]) return;

    result[i][j] = acc;
    visited[`${i}-${j}`] = true;

    for (let k = 0; k < 4; k++) {
      const key = direct[(path + k) % 4];
      const res = dfs(i + key[0], j + key[1], (path + k) % 4, acc + 1);
      if (res) break;
    }
  };

  dfs(0, 0, 0, 1);

  return result;
};
