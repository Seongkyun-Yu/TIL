/**
 * https://leetcode.com/problems/number-of-segments-in-a-string/
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
    if (s.length === 0) return 0;
        
    const result = s.split(" ").reduce((acc, cur) => {
        if (cur.trim().length === 0) return acc;
        return [...acc, cur]
    }, [])
    
    return result.length;
};