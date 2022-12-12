/**
 * EASY
 * https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  const char = {};
  const count1 = {};
  for (const c of word1) {
    count1[c] = count1[c] + 1 || 1;
    char[c] = true;
  }
  const count2 = {};
  for (const c of word2) {
    count2[c] = count2[c] + 1 || 1;
    char[c] = true;
  }

  for (const c of Object.keys(char)) {
    if (Math.abs((count1[c] || 0) - (count2[c] || 0)) > 3) return false;
  }

  return true;
};
