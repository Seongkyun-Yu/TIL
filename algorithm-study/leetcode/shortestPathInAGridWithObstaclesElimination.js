/**
 * HARD
 * https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/description/
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  const row = grid.length - 1;
  const col = grid[0].length - 1;

  const visited = {};
  const queue = [{ i: 0, j: 0, breakCnt: k, steps: 0 }];
  const mov = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length) {
    const { i, j, breakCnt, steps } = queue.shift();

    if (i < 0 || i > row) continue;
    if (j < 0 || j > col) continue;
    if (visited[`${i}-${j}-${breakCnt}`]) continue;
    if (grid[i][j] === 1 && breakCnt <= 0) continue;
    if (row === i && col === j) return steps;

    visited[`${i}-${j}-${breakCnt}`] = true;

    if (grid[i][j] === 1 && breakCnt > 0) {
      for (const [x, y] of mov) {
        queue.push({
          i: i + x,
          j: j + y,
          breakCnt: breakCnt - 1,
          steps: steps + 1,
        });
      }
    } else {
      for (const [x, y] of mov) {
        queue.push({ i: i + x, j: j + y, breakCnt, steps: steps + 1 });
      }
    }
  }

  return -1;
};
