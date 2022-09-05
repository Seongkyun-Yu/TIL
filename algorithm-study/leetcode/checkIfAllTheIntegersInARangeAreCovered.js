/**
 * https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
 var isCovered = function(ranges, left, right) {
    const map = {};
    for(const range of ranges){
        for(let i = range[0]; i <= range[1]; i++){
            map[i] = true;
        }
    }
    
    for(let i = left; i <= right; i++) {
        if (!map[i]) return false;
    }
        
    return true;
};