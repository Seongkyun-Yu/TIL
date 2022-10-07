/**
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let max = -Infinity;
    for(const sentence of sentences) {
        const len = sentence.split(" ").length;
        max = Math.max(len, max);
    }
    
    return max;
};