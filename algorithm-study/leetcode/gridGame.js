/**
 * MEDIUM
 * https://leetcode.com/problems/grid-game/
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  const row1Acc = grid[0].slice();
  const row2Acc = grid[1].slice();

  for (let i = grid[0].length - 2; i >= 0; i--) {
    row1Acc[i] += row1Acc[i + 1];
  }

  for (let i = 1; i < grid[0].length; i++) {
    row2Acc[i] += row2Acc[i - 1];
  }

  let result = Infinity;
  for (let i = 0; i < grid[0].length; i++) {
    const top = row1Acc[i + 1] || 0;
    const bottom = row2Acc[i - 1] || 0;

    const secondRobot = Math.max(top, bottom);
    result = Math.min(result, secondRobot);
  }

  return result;
};
