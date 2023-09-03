/**
 * EASY
 * https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const map = {};
  for (const word of words) {
    for (const char of word) {
      map[char] ? map[char]++ : (map[char] = 1);
    }
  }
  for (const number of Object.values(map)) {
    if (number % words.length !== 0) return false;
  }
  return true;
};
