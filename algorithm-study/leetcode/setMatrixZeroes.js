/**
 * MEDIUM
 * https://leetcode.com/problems/set-matrix-zeroes/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroList = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) zeroList.push([i, j]);
    }
  }

  const dfs = (i, j, path) => {
    if (i < 0 || j < 0) return;
    if (i >= matrix.length || j >= matrix[0].length) return;

    matrix[i][j] = 0;

    if (path === 'down') dfs(i + 1, j, 'down');
    if (path === 'up') dfs(i - 1, j, 'up');
    if (path === 'right') dfs(i, j + 1, 'right');
    if (path === 'left') dfs(i, j - 1, 'left');
  };

  for (const [i, j] of zeroList) {
    dfs(i, j, 'up');
    dfs(i, j, 'down');
    dfs(i, j, 'right');
    dfs(i, j, 'left');
  }
};
