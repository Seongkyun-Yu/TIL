/**
 * MEDIUM
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let min = Math.max(...weights);
  let max = weights.reduce((acc, cur) => acc + cur);

  let result = max;

  while (min <= max) {
    const capacity = Math.floor((min + max) / 2);

    let shipDay = 1;
    let acc = 0;
    for (const weight of weights) {
      acc += weight;
      if (acc > capacity) {
        shipDay++;
        acc = weight;
      }
    }

    if (shipDay <= days) {
      result = Math.min(result, capacity);
      max = capacity - 1;
    } else {
      min = capacity + 1;
    }
  }

  return result;
};
