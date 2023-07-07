/**
 * MEDIUM
 * https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  const count = new Map();
  let result = 0;

  for (const [width, height] of rectangles) {
    const num = width / height;
    result += count.get(num) || 0;
    count.set(num, count.get(num) + 1 || 1);
  }

  return result;
};
