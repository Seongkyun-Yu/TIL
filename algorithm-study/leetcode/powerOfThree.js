/**
 * https://leetcode.com/problems/power-of-three/
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    let num = 1;
    
    while(num <= n) {
        if (num === n) return true;
        num = num * 3;
    }
    
    return false;
};