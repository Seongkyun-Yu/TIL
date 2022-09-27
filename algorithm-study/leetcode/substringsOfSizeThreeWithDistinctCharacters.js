/**
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    if (s.length < 3) return 0;
    
    let count = 0;
    for(let i = 2; i < s.length; i++) {
        const sSet = new Set([s[i - 2], s[i - 1], s[i]]);
        if (sSet.size === 3) count++;
    }
    
    return count;
};