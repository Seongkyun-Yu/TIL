/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const checkList = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else if (s[i] === '{') stack.push('{');
    else if (s[i] === '[') stack.push('[');
    else {
      if (s[i] !== checkList[stack.pop()]) return false;
    }
  }

  return stack.length === 0;
};

var isValid = function(s) {
  const stack = [];
  const checkObj = {
      ')': '(',
      '}': '{',
      ']': '[',
  };
  
  for(let i = 0; i < s.length; i++) {
      if (checkObj[s[i]] && stack[stack.length - 1] === checkObj[s[i]]) {
          stack.pop();
          continue;
      }
      
      stack.push(s[i]);
  }
  
  return stack.length === 0;
};
