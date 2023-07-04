/**
 * EASY
 * https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let result = '';
  for (let i = 0; i < n - 1; i++) {
    result += 'a';
  }

  if (n % 2 === 0) result += 'b';
  else result += 'a';

  return result;
};
