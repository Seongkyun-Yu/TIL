/**
 * MEDIUM
 * https://leetcode.com/problems/shortest-path-to-get-food/
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {
  const direct = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visit = {};

  const bfs = (r, c) => {
    let result = 0;
    const queue = [[r, c]];
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [row, col] = queue.shift();
        if (row < 0 || row >= grid.length) continue;
        if (col < 0 || col >= grid[row].length) continue;
        if (visit[`${row}-${col}`]) continue;
        if (grid[row][col] === 'X') continue;
        if (grid[row][col] === '#') return result;

        visit[`${row}-${col}`] = true;

        for (const [x, y] of direct) {
          const newRow = row + x;
          const newCol = col + y;

          queue.push([newRow, newCol]);
        }
      }

      result++;
    }

    return -1;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '*') return bfs(i, j);
    }
  }
};
