/**
 * https://leetcode.com/problems/count-largest-group/
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    let count = {};
    let largestSize = -Infinity;
    let output = 0;
    
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        count[sum] ? count[sum] += 1 : count[sum] = 1;
        if (count[sum] > largestSize) largestSize = count[sum];        
    }
    
    for (let key in count) {
        if (count[key] === largestSize) output++;
    }
    
    return output++;
};