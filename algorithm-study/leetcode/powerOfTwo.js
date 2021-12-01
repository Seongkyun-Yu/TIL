/**
 * https://leetcode.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    
    let divedN = n;
    while (divedN >= 2) {
        divedN = divedN / 2
        console.log(divedN);
    }
    
    return divedN === 1
};
