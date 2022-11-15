/**
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/
 * @param {string} s
 * @return {number}
 */
 var maxScore = function(s) {
    let zero = 0;
    let one = 0;
    for(let i = 0; i < s.length; i++) {
        if (s[i] === "1") one++;
    }
    
    let max = -Infinity;
    for(let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") zero++;
        else one--;
        
        max = Math.max(max, zero + one);
    }
    
    return max;
};