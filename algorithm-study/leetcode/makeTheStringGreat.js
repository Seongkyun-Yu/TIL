/**
 * EASY
 * https://leetcode.com/problems/make-the-string-great/
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const isUpperCase =
      Math.abs(s[i].charCodeAt() - stack[stack.length - 1]?.charCodeAt()) ===
      32;

    if (stack.length && isUpperCase) stack.pop();
    else stack.push(s[i]);
  }

  return stack.join('');
};
