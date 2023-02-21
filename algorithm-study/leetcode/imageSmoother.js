/**
 * EASY
 * https://leetcode.com/problems/image-smoother/
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const smooth = (mat, m, n) => {
    let sum = 0;
    let cells = 0;
    for (let i = m - 1; i <= m + 1; i++) {
      if (i < 0 || i >= mat.length) continue;

      for (let j = n - 1; j <= n + 1; j++) {
        if (j < 0 || j >= mat[0].length) continue;

        sum += mat[i][j];
        cells++;
      }
    }

    return Math.floor(sum / cells);
  };

  const result = [];
  for (let i = 0; i < img.length; i++) {
    result.push([]);
    for (let j = 0; j < img[0].length; j++) {
      result[i].push(smooth(img, i, j));
    }
  }

  return result;
};
