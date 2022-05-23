/**
 * https://leetcode.com/problems/isomorphic-strings
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    const map1 = {};    
    for(let i = 0; i < s.length; i++) {
        if (!map1[s[i]]) map1[s[i]] = t[i];
        else if (map1[s[i]] !== t[i]) return false;
    }
    
    const map2 = {};    
    for(let i = 0; i < s.length; i++) {
        if (!map2[t[i]]) map2[t[i]] = s[i];
        else if (map2[t[i]] !== s[i]) return false;
    }
    
    return true;
};