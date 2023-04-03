/**
 * EASY
 * https://leetcode.com/problems/fair-candy-swap/
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const sumA = aliceSizes.reduce((acc, cur) => acc + cur, 0);
  const sumB = bobSizes.reduce((acc, cur) => acc + cur, 0);
  const setB = new Set(bobSizes);

  for (const x of aliceSizes) {
    const y = x + (sumB - sumA) / 2;
    if (setB.has(y)) {
      return [x, y];
    }
  }
};
