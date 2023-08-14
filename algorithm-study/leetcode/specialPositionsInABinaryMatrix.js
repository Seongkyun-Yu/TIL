/**
 * EASY
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix/
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const row = {};
  const col = {};

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      row[i] = row[i] + mat[i][j] || mat[i][j];
      col[j] = col[j] + mat[i][j] || mat[i][j];
    }
  }

  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] && row[i] == 1 && col[j] === 1) count++;
    }
  }

  return count;
};
