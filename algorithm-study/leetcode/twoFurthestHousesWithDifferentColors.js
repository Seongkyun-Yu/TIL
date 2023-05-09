/**
 * EASY
 * https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let max = -Infinity;

  for (let i = 0; i < colors.length; i++) {
    for (let j = colors.length - 1; j > i; j--) {
      if (colors[i] != colors[j]) {
        max = Math.max(j - i, max);
      }
    }
  }

  return max;
};
