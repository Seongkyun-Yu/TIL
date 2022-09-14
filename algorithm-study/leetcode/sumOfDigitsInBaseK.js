/**
 * https://leetcode.com/problems/sum-of-digits-in-base-k/
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var sumBase = function(n, k) {
    const kDigits = n.toString(k);
    
    let sum = 0;
    for(let i = 0; i < kDigits.length; i++) {
        sum += +kDigits[i];
    }
    
    return sum;
};