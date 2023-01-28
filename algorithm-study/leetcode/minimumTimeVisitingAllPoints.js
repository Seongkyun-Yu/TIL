/**
 * https://leetcode.com/problems/minimum-time-visiting-all-points/
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  const p2pTime = (p1, p2) => {
    if (p1[0] - p2[0] === p1[1] - p2[1]) return Math.abs(p1[0] - p2[0]);

    return Math.max(Math.abs(p1[0] - p2[0]), Math.abs(p1[1] - p2[1]));
  };

  return points.reduce((pre, cur, index, arr) => {
    if (index === arr.length - 1) return pre;

    return pre + p2pTime(cur, arr[index + 1]);
  }, 0);
};
