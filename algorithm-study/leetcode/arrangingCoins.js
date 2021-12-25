/**
 * https://leetcode.com/problems/arranging-coins/
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let sum = 0;
    
    let i = 0;
    while (sum + i <= n) {
        sum += i;
        i++;
    }
    
    return i - 1;
};