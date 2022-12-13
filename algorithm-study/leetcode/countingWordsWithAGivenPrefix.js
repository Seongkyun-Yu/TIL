/**
 * EASY
 * https://leetcode.com/problems/counting-words-with-a-given-prefix/description/
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;

  for (const word of words) {
    for (let i = 0; i < pref.length; i++) {
      if (word[i] !== pref[i]) break;
      if (i === pref.length - 1) count++;
    }
  }

  return count;
};
