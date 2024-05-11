/**
 * MEDIUM
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];

  for (const c of s) {
    if (stack.length === 0) {
      stack.push([c, 1]);
      continue;
    }
    const [lastChar, count] = stack[stack.length - 1];
    if (lastChar !== c) {
      stack.push([c, 1]);
      continue;
    }

    if (k - 1 === count) stack.pop();
    else stack[stack.length - 1][1] += 1;
  }

  return stack.reduce((acc, cur) => {
    let str = acc;
    for (let i = 0; i < cur[1]; i++) {
      str += cur[0];
    }
    return str;
  }, '');
};
