/**
 * 1768
 * https://leetcode.com/problems/merge-strings-alternately/
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let result = "";
    const len = word1.length > word2.length ? word1.length : word2.length;
    
    for(let i = 0; i < len; i++) {
        result += word1[i] ? word1[i] : "";
        result += word2[i] ? word2[i] : "";
    }
    
    return result;
};