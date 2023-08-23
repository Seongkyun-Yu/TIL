/**
 * EASY
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let even = 0;
  let odd = 0;
  for (const idx of position) {
    if (idx % 2) even++;
    else odd++;
  }

  return Math.min(odd, even);
};
