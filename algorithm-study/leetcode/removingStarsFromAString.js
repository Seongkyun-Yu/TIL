/**
 * MEDIUM
 * https://leetcode.com/problems/removing-stars-from-a-string/
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];
  for (const c of s) {
    if (c !== '*') {
      stack.push(c);
      continue;
    }

    stack.pop();
  }

  return stack.join('');
};
