/**
 * https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    let count = 0;
    for(let i = low % 2 === 0 ? low + 1 : low; i <= high; i += 2) {
        count++;
    }
    
    return count;
};