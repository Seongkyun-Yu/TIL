/**
 * MEDIUM
 * https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  const list = [];
  const count = {};
  for (const [width, height] of rectangles) {
    const divide = gcd(width, height);
    const num = width / divide / (height / divide);
    list.push(num);
    count[num] = count[num] + 1 || 1;
  }

  let result = 0;
  for (const num of list) {
    if (count[num] > 1) {
      result += count[num] - 1;
    }
    count[num] -= 1;
  }

  return result;
};
