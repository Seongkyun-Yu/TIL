/**
 * EASY
 * https://leetcode.com/problems/perform-string-shifts/
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let chars = s.split('');

  for (let [direction, ammount] of shift) {
    if (direction === 0) {
      while (ammount !== 0) {
        let firstChar = chars.shift();
        chars.push(firstChar);
        ammount--;
      }
      continue;
    }
    while (ammount !== 0) {
      let lastChar = chars.pop();
      chars.unshift(lastChar);
      ammount--;
    }
  }

  return chars.join('');
};
