/**
 * https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
    const chars = {};
    for(const c of s) {
        chars[c] = chars[c] + 1 || 1;
    }
    
    const occurrence = chars[s[0]];
    for(const c of s) {
        if (chars[c] !== occurrence) return false;
    }
    
    return true;
};