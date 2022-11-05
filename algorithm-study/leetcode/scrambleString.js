/**
 * https://leetcode.com/problems/scramble-string/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var isScramble = function(s1, s2) {
    if (s1 === s2) return s2;
    const cache = {};
    
    const splitString = (s1, s2) => {
        if (s1 === s2) return true;
        if (s1.length !== s2.length) return false;
        if (s1.length <= 1) s1 === s2;
        if (cache[s1 + s2] !== undefined) return cache[s1 + s2];
        if (cache[s2 + s1] !== undefined) return cache[s2 + s1];
        
        for(let i = 1; i < s1.length; i++) {
            const s1Front = s1.slice(0, i);
            const s1Back = s1.slice(i);
            const s2Front = s2.slice(0, i);
            const s2Back = s2.slice(i);
            
            if (splitString(s1Front, s2Front) && splitString(s1Back, s2Back)) {
                cache[s1 + s2] = true;
                return true;
            }
            
            if (splitString(s1Front, s2.slice(s1.length - i)) && splitString(s1Back, s2.slice(0, s1.length - i))) {
                cache[s1 + s2] = true;
                return true;
            }
        }
        
        cache[s1 + s2] = false;
        return false;
    }
    
    return splitString(s1, s2);
};