/**
 * EASY
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const words = text.split(' ');
  const broken = {};
  for (const c of brokenLetters) {
    broken[c] = true;
  }

  let count = 0;
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (broken[word[i]]) break;
      if (i === word.length - 1) count++;
    }
  }

  return count;
};
