/**
 * MEDIUM
 * https://leetcode.com/problems/shortest-word-distance-ii/
 * @param {string[]} wordsDict
 */
var WordDistance = function (wordsDict) {
  this.words = {};
  for (let i = 0; i < wordsDict.length; i++) {
    if (this.words[wordsDict[i]]) this.words[wordsDict[i]].push(i);
    else this.words[wordsDict[i]] = [i];
  }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function (word1, word2) {
  const indexs1 = this.words[word1];
  const indexs2 = this.words[word2];

  let min = Infinity;
  for (const index1 of indexs1) {
    for (const index2 of indexs2) {
      min = Math.min(min, Math.abs(index1 - index2));
    }
  }

  return min;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
