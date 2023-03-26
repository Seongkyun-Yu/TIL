/**
 * MEDIUM
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const gLen = grid.length;

  const direct = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  const isInvalid = (row, col) =>
    row < 0 || col < 0 || row === gLen || col === gLen;

  let result = 1;
  const visit = {};
  const queue = [[0, 0]];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [row, col] = queue.shift();

      if (grid[row][col]) continue;
      if (visit[`${row}-${col}`]) continue;
      if (row === gLen - 1 && col === gLen - 1) return result;

      visit[`${row}-${col}`] = true;

      for (const [dRow, dCol] of direct) {
        const [newRow, newCol] = [row + dRow, col + dCol];
        if (isInvalid(newRow, newCol)) continue;
        if (grid[newRow][newCol]) continue;
        queue.push([newRow, newCol]);
      }
    }
    result++;
  }

  return -1;
};
