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
  const stack = [];
  for (let i = 0; i < num.length; i++) {
    while (count > 0 && stack.length && stack[stack.length - 1] > +num[i]) {
      count--;
      stack.pop();
    }
    stack.push(+num[i]);
  }

  while (stack.length > num.length - k) {
    stack.pop();
  }

  return BigInt(stack.join('')) + '';
};
