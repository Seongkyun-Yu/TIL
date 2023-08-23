/**
 * EASY
 * https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let counterTypes =
    word.length +
    Math.min(word.charCodeAt(0) - 97, 97 - word.charCodeAt(0) + 26);

  for (let i = 0; i < word.length - 1; i++) {
    const diff = Math.abs(word.charCodeAt(i) - word.charCodeAt(i + 1));
    counterTypes += Math.min(26 - diff, diff);
  }

  return counterTypes;
};
