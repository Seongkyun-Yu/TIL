/**
 * EASY
 * https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [];
  for (const c of s) {
    if (stack.length === 0) stack.push(c);
    else if (c === 'B' && stack[stack.length - 1] === 'A') stack.pop();
    else if (c === 'D' && stack[stack.length - 1] === 'C') stack.pop();
    else stack.push(c);
  }

  return stack.length;
};
