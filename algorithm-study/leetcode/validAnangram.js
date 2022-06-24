/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const strMap1 = {};    
    for(let i = 0; i < s.length; i++) {
        strMap1[s[i]] = strMap1[s[i]] ? strMap1[s[i]] + 1 : 1;
    }
    
    const strMap2 = {};
    for(let i = 0; i < t.length; i++) {
        strMap2[t[i]] = strMap2[t[i]] ? strMap2[t[i]] + 1 : 1;
    }
    
    for(const c of Object.keys(strMap1)) {
        if (strMap1[c] !== strMap2[c]) return false;
    }                    
    
    return true
};