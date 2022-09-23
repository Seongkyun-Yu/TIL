/**
 * https://leetcode.com/problems/a-number-after-a-double-reversal/
 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {
    
    const numStr = String(num);
    if (numStr.length === 1) return true;
    
    return numStr[0] !== "0" && numStr[numStr.length - 1] !== "0";
};