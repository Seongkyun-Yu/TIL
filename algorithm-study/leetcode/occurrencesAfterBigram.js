/**
 * EASY
 * https://leetcode.com/problems/occurrences-after-bigram/
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const results = [];
  const arr = text.split(' ');

  for (let i = 2; i < arr.length; i++) {
    if (arr[i - 2] !== first) continue;
    if (arr[i - 1] !== second) continue;

    results.push(arr[i]);
  }

  return results;
};
