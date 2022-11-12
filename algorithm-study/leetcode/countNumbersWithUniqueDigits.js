/**
 * https://leetcode.com/problems/count-numbers-with-unique-digits/
 * @param {number} n
 * @return {number}
 */
 var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) return 1;
    
    let result = 10;
    
    let candidates = 9;
    let cur = candidates;
    for(let i = 2; i <= n; i++) {
        cur = cur * candidates || cur;
        result += cur;
        
        if (candidates) candidates--;
    }
    
    return result;
};