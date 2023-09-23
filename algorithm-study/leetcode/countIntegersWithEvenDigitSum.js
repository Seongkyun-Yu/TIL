/**
 * EASY
 * https://leetcode.com/problems/count-integers-with-even-digit-sum/
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    const sum = [...String(i)].reduce((acc, cur) => acc + +cur, 0);
    if (sum % 2) continue;
    count++;
  }

  return count;
};
