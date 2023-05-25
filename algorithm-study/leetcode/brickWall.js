/**
 * MEDIUM
 * https://leetcode.com/problems/brick-wall/
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let countGap = { 0: 0 };

  for (const row of wall) {
    let blocks = 0;

    for (let i = 0; i < row.length - 1; i++) {
      const block = row[i];
      blocks += block;

      if (countGap[blocks]) countGap[blocks] += 1;
      else countGap[blocks] = 1;
    }
  }

  return wall.length - Math.max(...Object.values(countGap));
};
