/**
 * EASY
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);

  const targets = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) targets.push(s[i]);
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) result += targets.pop();
    else result += s[i];
  }

  return result;
};
