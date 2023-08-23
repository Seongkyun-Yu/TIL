/**
 * EASY
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let result = 0;

  for (const oper of operations) {
    if (oper[0] === '-' || oper[2] === '-') result--;
    else result++;
  }

  return result;
};
