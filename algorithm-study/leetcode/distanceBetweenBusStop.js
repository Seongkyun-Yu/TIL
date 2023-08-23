/**
 * EASY
 * https://leetcode.com/problems/distance-between-bus-stops/
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  const totalDistance = distance.reduce((a, b) => a + b, 0);
  let clockwiseDist = 0;

  let begining = Math.min(start, destination);
  let finish = Math.max(start, destination);

  for (let i = begining; i < finish; i++) {
    clockwiseDist += distance[i];
  }

  const reverseDist = totalDistance - clockwiseDist;

  return Math.min(clockwiseDist, reverseDist);
};
