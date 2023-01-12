/**
 * MEDIUM
 * https://leetcode.com/problems/simplify-path/
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const splitedPaths = path.split('/');

  const stack = [];
  for (const s of splitedPaths) {
    if (s === '..') {
      if (stack.length) stack.pop();
      continue;
    }
    if (s === '') continue;
    if (s === '.') continue;

    stack.push(s);
  }

  return '/' + stack.join('/');
};
