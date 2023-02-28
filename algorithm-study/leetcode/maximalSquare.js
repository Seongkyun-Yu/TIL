/**
 * MEDIUM
 * https://leetcode.com/problems/maximal-square/
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  const dp = [];
  for (let i = 0; i < row; i++) {
    dp.push(new Array(col).fill(0));
  }

  let maxWidth = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] !== '1') continue;
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
        maxWidth = Math.max(maxWidth, dp[i][j]);
        continue;
      }
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      maxWidth = Math.max(maxWidth, dp[i][j]);
    }
  }

  return maxWidth * maxWidth;
};
