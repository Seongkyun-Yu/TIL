/**
 * https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    let max = -Infinity;
    const ballCounts = {};
    
    for(let i = lowLimit; i <= highLimit; i++) {
        const nums = String(i).split("");
        let acc = 0;
        for(num of nums) {
            acc += +num;
        }
        
        ballCounts[acc] = ballCounts[acc] + 1 || 1;
        
        max = Math.max(max, ballCounts[acc]);
    }
    
    return max;
};