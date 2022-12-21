/**
 * MEDIUM
 * https://leetcode.com/problems/pacific-atlantic-water-flow/
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const rowLen = heights.length;
  const colLen = heights[0].length;

  const dfs = (i, j, visited, prev) => {
    if (i < 0 || i >= heights.length) return;
    if (j < 0 || j >= heights[0].length) return;
    if (heights[i][j] < prev) return;
    if (visited[`${i}-${j}`]) return;

    visited[`${i}-${j}`] = true;

    dfs(i + 1, j, visited, heights[i][j]);
    dfs(i - 1, j, visited, heights[i][j]);
    dfs(i, j + 1, visited, heights[i][j]);
    dfs(i, j - 1, visited, heights[i][j]);
  };

  const paVisited = {};
  const alVisited = {};

  for (let i = 0; i < rowLen; i++) {
    dfs(i, 0, paVisited, heights[i][0]);
    dfs(i, colLen - 1, alVisited, heights[i][colLen - 1]);
  }

  for (let i = 0; i < colLen; i++) {
    dfs(0, i, paVisited, heights[0][i]);
    dfs(rowLen - 1, i, alVisited, heights[rowLen - 1][i]);
  }

  const result = [];
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (paVisited[`${i}-${j}`] && alVisited[`${i}-${j}`]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};
