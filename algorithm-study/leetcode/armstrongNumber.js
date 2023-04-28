/**
 * EASY
 * https://leetcode.com/problems/armstrong-number/
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function (n) {
  let acc = 0;
  const str = n + '';
  for (let i = 0; i < str.length; i++) {
    const num = +str[i];
    acc += Math.pow(num, str.length);
  }

  return n === acc;
};
