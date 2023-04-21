/**
 * EASY
 * https://leetcode.com/problems/flood-fill/
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const startingPixel = image[sr][sc];
  const visit = {};
  const dfs = (r, c) => {
    if (r < 0 || r >= image.length) return;
    if (c < 0 || c >= image[r].length) return;
    if (visit[`${r}-${c}`]) return;
    if (image[r][c] !== startingPixel) return;

    visit[`${r}-${c}`] = true;
    image[r][c] = color;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  dfs(sr, sc);

  return image;
};
