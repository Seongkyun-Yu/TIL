/**
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    const strList = [...s1.split(" "), ...s2.split(" ")];
    const strCountObj = {};
    const result = [];
    
    for(const str of strList) {
        strCountObj[str] = strCountObj[str] + 1 || 1;
    }
    
    for(const key in strCountObj) {
        if (strCountObj[key] === 1) result.push(key);
    }
    
    return result;
};