/**
 * MEDIUM
 * https://leetcode.com/problems/max-increase-to-keep-city-skyline/
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const rowMaxs = [];
  const colMaxs = [];

  for (let i = 0; i < grid.length; i++) {
    let colMax = 0;
    let rowMax = 0;
    for (let j = 0; j < grid[i].length; j++) {
      rowMax = Math.max(rowMax, grid[i][j]);
      colMax = Math.max(colMax, grid[j][i]);
    }

    rowMaxs.push(rowMax);
    colMaxs.push(colMax);
  }

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const dif = Math.min(rowMaxs[i], colMaxs[j]) - grid[i][j];

      if (dif > 0) count += dif;
    }
  }

  return count;
};
