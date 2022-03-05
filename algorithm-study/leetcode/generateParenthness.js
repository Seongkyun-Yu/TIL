/**
 * https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
 const makeBracket = (left, right, s, brackets) => {
    if (left > right) return;

    if (left === 0 && right === 0) {
        brackets.push(s);
        return;
    }

    if (left > 0) makeBracket(left - 1, right, s + '(', brackets);
    if (right > 0) makeBracket(left, right - 1, s + ')', brackets);
}

var generateParenthesis = function(n) {
    const brackets = [];
  
    makeBracket(n, n, '', brackets);
    
    return brackets;
};