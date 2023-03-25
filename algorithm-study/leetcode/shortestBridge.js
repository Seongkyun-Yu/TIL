/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const invalid = (r, c) =>
    r < 0 || c < 0 || r === grid.length || c === grid.length;
  const direct = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visit = {};
  const queue = [];

  const dfs = (r, c) => {
    if (invalid(r, c)) return;
    if (!grid[r][c]) return;
    if (visit[`${r}-${c}`]) return;

    visit[`${r}-${c}`] = true;
    queue.push([r, c]);

    for (const [dr, dc] of direct) {
      dfs(r + dr, c + dc);
    }
  };

  const bfs = () => {
    let result = 0;
    while (queue.length) {
      const len = queue.length;
      for (let z = 0; z < len; z++) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of direct) {
          const curR = r + dr;
          const curC = c + dc;
          if (invalid(curR, curC)) continue;
          if (visit[`${curR}-${curC}`]) continue;
          if (grid[curR][curC]) return result;

          queue.push([curR, curC]);
          visit[`${curR}-${curC}`] = true;
        }
      }
      result++;
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j]) {
        dfs(i, j);
        return bfs();
      }
    }
  }
};
