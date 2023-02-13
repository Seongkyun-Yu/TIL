/**
 * MEDIUM
 * https://leetcode.com/problems/remove-k-digits/
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length === k) return '0';

  let count = k;
  const stack = [+num[0]];
  for (let i = 1; i < num.length; i++) {
    if (!count || +stack[stack.length - 1] === +num[i]) {
      stack.push(+num[i]);
      continue;
    }

    if (+stack[stack.length - 1] < +num[i]) {
      count--;
      continue;
    }

    stack.pop();
    stack.push(+num[i]);
    count--;
  }

  while (stack.length > num.length - k) {
    stack.shift();
  }

  return +stack.join('') + '';
};
