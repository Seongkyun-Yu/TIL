/**
 * https://leetcode.com/problems/power-of-four/
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
    let i = 0;
    let num = 0;
    
    while(num < n){
        num = Math.pow(4, i);
        if (num === n) return true;
        i++
    }
    
    return false;
};