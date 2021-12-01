/**
 * https://leetcode.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
     console.log(n-(n&-n))
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    
    let divedN = n;
    while (divedN >= 2) {
        divedN = divedN / 2
    }
    
    return divedN === 1
};

console.log(isPowerOfTwo(16))