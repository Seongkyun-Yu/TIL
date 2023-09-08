/**
 * MEDIUM
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return Math.max(...n.split('').map((ch) => +ch));
};
