/**
 * MEDIUM
 * https://leetcode.com/problems/grid-game/
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  let max = 0;
  let maxPath = [];
  const tempAcc = [];
  const dfs = (cur, path, acc) => {
    const [row, col] = cur;
    if (row > 1) return;
    if (col > grid[0].length - 1) return;

    acc += grid[row][col];
    path.push([row, col]);
    if (row === 1 && col === grid[0].length - 1) {
      tempAcc.push(acc);
      if (max > acc) return;
      maxPath = path;
      max = acc;
      return;
    }

    dfs([row + 1, col], path.slice(), acc);
    dfs([row, col + 1], path.slice(), acc);
  };

  dfs([0, 0], [], 0);

  if (grid[0][0] === 20) console.log({ max, maxPath });

  for (const path of maxPath) {
    const [row, col] = path;
    grid[row][col] = 0;
  }

  max = 0;
  maxPath = [];
  dfs([0, 0], [], 0);

  return max;
};
