/**
 * EASY
 * https://leetcode.com/problems/circular-sentence/
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const sArr = sentence.split(' ');

  let before = sArr[0][sArr[0].length - 1];
  for (let i = 1; i < sArr.length; i++) {
    const s = sArr[i];
    if (before !== s[0]) return false;
    before = s[s.length - 1];
  }

  const first = sArr[0];
  const last = sArr[sArr.length - 1];

  if (first[0] !== last[last.length - 1]) return false;

  return true;
};
