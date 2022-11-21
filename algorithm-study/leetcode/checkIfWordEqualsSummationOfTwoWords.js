/**
 * https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 var isSumEqual = function(firstWord, secondWord, targetWord) {
    let first = "";
    for(let i = 0; i < firstWord.length; i++) {
        first += firstWord.charCodeAt(i) - 97
    }
    
    let second = "";
    for(let i = 0; i < secondWord.length; i++) {
        second += secondWord.charCodeAt(i) - 97
    }
    
    let target = "";
    for(let i = 0; i < targetWord.length; i++) {
        target += targetWord.charCodeAt(i) - 97
    }
    
    return Number(target) === Number(first) + Number(second);
};