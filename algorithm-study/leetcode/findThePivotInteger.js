/**
 * EASY
 * https://leetcode.com/problems/find-the-pivot-integer/
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let leftAcc = 0;
  for (let i = 1; i <= n; i++) {
    leftAcc += i;
  }

  let rightAcc = 0;
  for (i = n; i >= 0; i--) {
    rightAcc += i;
    leftAcc -= i;

    if (leftAcc + i === rightAcc) return i;
  }

  return -1;
};
