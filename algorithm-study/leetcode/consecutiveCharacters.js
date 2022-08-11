/**
 * https://leetcode.com/problems/consecutive-characters/
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    const map = {};
    let count = 0;
    let maxCount = 0;
    let prev = "";
    
    for(const c of s) {
        if (c === prev) count++;
        else {
            prev = c;
            count = 1;
        }
        maxCount = Math.max(maxCount, count)
    }
    
    return maxCount;
};