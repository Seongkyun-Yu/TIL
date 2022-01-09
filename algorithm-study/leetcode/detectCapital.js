/**
 * https://leetcode.com/problems/detect-capital/
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    if(/^([A-Z]?)[a-z]+$/g.test(word)) return true;
    if (/^[A-Z]+$/g.test(word)) return true;
    
    return false;
};

console.log(detectCapitalUse("123"))