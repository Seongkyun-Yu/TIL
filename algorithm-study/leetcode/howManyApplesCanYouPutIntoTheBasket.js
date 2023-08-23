/**
 * EASY
 * https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function (weight) {
  weight.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < weight.length; i++) {
    sum += weight[i];

    if (sum > 5000) return i;
  }

  return weight.length;
};
