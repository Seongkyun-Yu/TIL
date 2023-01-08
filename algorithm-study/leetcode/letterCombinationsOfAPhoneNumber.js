/**
 * MEDIUM
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const result = [];
  const dfs = (i, combis) => {
    if (combis.length === digits.length) {
      result.push(combis.join(''));
      return;
    }

    const str = letters[digits[i]];
    for (const c of str) {
      combis.push(c);
      dfs(i + 1, combis);
      combis.pop();
    }
  };

  dfs(0, []);

  return result;
};
