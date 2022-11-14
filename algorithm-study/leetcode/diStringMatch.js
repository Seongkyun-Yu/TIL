/**
 * https://leetcode.com/problems/di-string-match/
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    const result = [];
    let small = 0;
    let big = s.length;
    for(let i = 0; i <= s.length; i++) {
        if (s[i] === "I") result.push(small++);
        else result.push(big--);
    }
    
    return result;
};