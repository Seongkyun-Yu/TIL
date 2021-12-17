/**
 * https://leetcode.com/problems/find-the-difference/
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let sSum1 = 0;
    let sSum2 = 0;
    
    for(let i = 0; i < s.length; i++) {
        sSum1 += s.charCodeAt(i);
        sSum2 += t.charCodeAt(i);
    }
    sSum2 += t.charCodeAt(t.length - 1);
    
    return String.fromCharCode(sSum2 - sSum1);
};