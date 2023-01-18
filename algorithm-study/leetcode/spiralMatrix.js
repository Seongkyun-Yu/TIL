/**
 * MEDIUM
 * https://leetcode.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const visited = {};
  const result = [];

  const direct = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const dfs = (i, j, path) => {
    if (i < 0) return;
    if (j < 0) return;
    if (i > matrix.length - 1) return;
    if (j > matrix[0].length - 1) return;
    if (visited[`${i}-${j}`]) return;

    result.push(matrix[i][j]);
    visited[`${i}-${j}`] = true;

    for (let k = 0; k < 4; k++) {
      const key = direct[(path + k) % 4];
      const res = dfs(i + key[0], j + key[1], (path + k) % 4);
      if (res) break;
    }
  };

  dfs(0, 0, 0);

  return result;
};
