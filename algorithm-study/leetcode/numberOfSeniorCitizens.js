/**
 * EASY
 * https://leetcode.com/problems/number-of-senior-citizens/
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0;
  for (const info of details) {
    const age = info[11] + info[12];
    if (+age > 60) count++;
  }

  return count;
};
