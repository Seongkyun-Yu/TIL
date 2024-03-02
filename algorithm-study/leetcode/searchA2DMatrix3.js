/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rowLeft = 0;
  let rowRight = matrix.length;
  while (rowLeft <= rowRight) {
    const rowMid = Math.floor((rowLeft + rowRight) / 2);

    let colLeft = 0;
    let colRight = matrix[rowMid]?.length || 0;

    while (colLeft <= colRight) {
      const colMid = Math.floor((colLeft + colRight) / 2);

      if (matrix[rowMid] && matrix[rowMid][colMid] === target) return true;
      if (matrix[rowMid] && matrix[rowMid][colMid] < target)
        colLeft = colMid + 1;
      else colRight = colMid - 1;
    }

    if (matrix[rowMid] && matrix[rowMid][colRight] === target) return true;
    if (matrix[rowMid] && matrix[rowMid][colRight] < target)
      rowLeft = rowMid + 1;
    else rowRight = rowMid - 1;
  }

  return false;
};
