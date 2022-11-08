/**
 * https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
    let bIndex = Infinity;
    let aIndex = -Infinity;
    
    for(let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "b") bIndex = i;
        else aIndex = i;
        
        if (aIndex > bIndex) return false;
    }
    
    return true;
};