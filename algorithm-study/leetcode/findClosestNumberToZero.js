/**
 * EASY
 * https://leetcode.com/problems/find-closest-number-to-zero/
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let min = -Infinity;
  let minDist = Infinity;

  for (const num of nums) {
    const dist = Math.abs(num);
    if (dist < minDist) {
      min = num;
      minDist = dist;
    } else if (dist === minDist && num > min) {
      min = num;
    }
  }

  return min;
};
