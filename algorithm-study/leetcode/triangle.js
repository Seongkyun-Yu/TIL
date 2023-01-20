/**
 * MEDIUM
 * https://leetcode.com/problems/triangle/
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const result = [];
  for (let i = 0; i < triangle.length; i++) {
    result.push([]);
  }

  for (let i = 0; i < triangle.length - 1; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (result[i][j]) {
        if (result[i + 1][j]) {
          result[i + 1][j] = Math.min(
            result[i + 1][j],
            triangle[i + 1][j] + result[i][j],
          );
        } else {
          result[i + 1][j] = triangle[i + 1][j] + result[i][j];
        }

        if (result[i + 1][j + 1]) {
          result[i + 1][j + 1] = Math.min(
            result[i + 1][j + 1],
            triangle[i + 1][j] + result[i][j + 1],
          );
        } else {
          result[i + 1][j + 1] = triangle[i + 1][j] + result[i][j + 1];
        }
      } else {
        result[i + 1][j] = triangle[i][j] + triangle[i + 1][j];
        result[i + 1][j + 1] = triangle[i][j] + triangle[i + 1][j + 1];
      }

      console.log(i, j, result);
    }
  }

  return Math.min(...result[triangle.length - 1]);
};
