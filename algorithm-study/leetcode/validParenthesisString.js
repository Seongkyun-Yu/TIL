/**
 * MEDIUM
 * https://leetcode.com/problems/valid-parenthesis-string/
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let wildCard = 0;
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.push('(');
    } else if (c === ')') {
      if (stack.length) {
        stack.pop();
      } else if (wildCard === 0) {
        return false;
      } else {
        wildCard--;
      }
    } else {
      wildCard++;
    }
  }

  if (stack.length) {
    return wildCard >= stack.length;
  }

  return true;
};
