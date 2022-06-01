/**
 * https://leetcode.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    const patternList = [...pattern];
    const wordList = s.split(" ");
    
    if (patternList.length !== wordList.length) return false;
    
    const checkObj1 = {};
    const checkObj2 = {};
    
    for(let i = 0; i < patternList.length; i++) {
        if (checkObj1[patternList[i]]) {
            if (checkObj1[patternList[i]] !== wordList[i]) return false;
        }
        else {
            if (checkObj2[wordList[i]]) return false;
            checkObj1[patternList[i]] = wordList[i];
            checkObj2[wordList[i]] = true;
        }
    }
    
    return true;
};