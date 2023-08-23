/**
 * EASy
 * https://leetcode.com/problems/faulty-sensor/
 * @param {number[]} sensor1
 * @param {number[]} sensor2
 * @return {number}
 */
var badSensor = function (sensor1, sensor2) {
  const n = sensor1.length;

  let i = 0;

  while (i < n && sensor1[i] == sensor2[i]) {
    i++;
  }

  let match1 = true;
  let match2 = true;

  for (let start = i + 1; start < n; start++) {
    if (sensor1[start] != sensor2[start - 1]) match1 = false;
    if (sensor2[start] != sensor1[start - 1]) match2 = false;
  }

  if (match1 === match2) return -1;
  return match1 ? 2 : 1;
};
