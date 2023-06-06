/**
 * EASY
 * https://leetcode.com/problems/hexspeak/
 * @param {string} num
 * @return {string}
 */
var toHexspeak = function (num) {
  const map = {
    0: 'O',
    1: 'I',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };
  let res = '';

  while (num > 0) {
    const rem = num % 16;

    if (!map[rem]) return 'ERROR';

    res = map[rem] + res;
    num = Math.floor(num / 16);
  }

  return res;
};
