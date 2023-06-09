/**
 * EASY
 * https://leetcode.com/problems/count-prefixes-of-a-given-string/
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      if (words[i] === s.slice(0, j)) {
        count++;
      }
    }
  }
  return count;
};
