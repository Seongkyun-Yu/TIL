/**
 * MEDIUM
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rowLen = matrix.length - 1;
  const colLen = matrix[0].length - 1;

  const binarySearch = (direct, idx) => {
    if (direct === 'row') {
      let i = 0;
      let j = colLen;
      while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        if (target === matrix[idx][mid]) return true;
        if (target > matrix[idx][mid]) i = mid + 1;
        else j = mid - 1;
      }

      return false;
    } else {
      let i = 0;
      let j = rowLen;
      while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        if (target === matrix[mid][idx]) return true;
        if (target > matrix[mid][idx]) i = mid + 1;
        else j = mid - 1;
      }

      return false;
    }
  };

  for (let i = 0; i <= rowLen; i++) {
    if (target < matrix[i][0]) continue;
    if (matrix[i][colLen] < target) continue;

    if (binarySearch('row', i)) return true;

    for (let j = 0; j <= colLen; j++) {
      if (target < matrix[0][j]) continue;
      if (matrix[rowLen][j] < target) continue;

      if (binarySearch('col', j)) return true;
    }
  }

  return false;
};
