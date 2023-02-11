/**
 * EASY
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const rows = new Array(m).fill(1000000);
  const cols = new Array(n).fill(1);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] > matrix[i][j]) {
        rows[i] = matrix[i][j];
      }
      if (cols[j] < matrix[i][j]) {
        cols[j] = matrix[i][j];
      }
    }
  }

  return rows.filter((r) => cols.includes(r));
};
