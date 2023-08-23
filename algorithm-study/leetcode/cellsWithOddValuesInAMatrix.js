/**
 * EASY
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < indices.length; i++) {
    const [x, y] = indices[i];
    for (let j = 0; j < n; j++) {
      arr[x][j]++;
    }
    for (let j = 0; j < m; j++) {
      arr[j][y]++;
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] % 2 === 1) res++;
    }
  }

  return res;
};
