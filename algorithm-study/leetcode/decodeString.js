/**
 * MEDIUM
 * https://leetcode.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (const c of s) {
    if (c !== ']') {
      stack.push(c);
      continue;
    }

    let str = '';
    while (!Number(stack[stack.length - 1])) {
      const char = stack.pop();
      if (char === '[') break;

      str = char + str;
    }

    let num = '';
    while (stack.length && !Number.isNaN(Number(stack[stack.length - 1]))) {
      const char = stack.pop();
      num = char + num;
    }
    num = Number(num);

    let tempStr = '';
    for (let i = 0; i < num; i++) {
      tempStr += str;
    }

    stack.push(tempStr);
  }

  return stack.join('');
};
