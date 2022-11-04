/**
 * https://leetcode.com/problems/reverse-bits/
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let digits = n.toString(2);
    
    while(digits.length < 32) digits = "0" + digits;
    
    let result = "";
    for(let i = digits.length -1; i >= 0; i--) {
        result += digits[i]
    }
    
    return parseInt(result, 2);
};