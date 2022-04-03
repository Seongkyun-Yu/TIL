/**
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let count = 0;
    let n = num;
    
    while(n !== 0) {
        if (n % 2 === 0) n = n / 2;
        else n -= 1;
        count++;
    }
    
    return count;
};