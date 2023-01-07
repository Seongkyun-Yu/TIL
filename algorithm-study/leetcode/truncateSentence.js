/**
 * EASY
 * https://leetcode.com/problems/truncate-sentence/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    const strs = s.split(" ");

    let result = "";
    for(let i = 0; i < k; i++) {
        result += strs[i] + " ";
    }

    return result.trim();
};