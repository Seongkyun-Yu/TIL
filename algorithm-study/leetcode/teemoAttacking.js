/**
 * https://leetcode.com/problems/teemo-attacking/
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    if (duration === 0) return 0;
    if (timeSeries.length === 0) return 0;
    
    let sum = duration;
    
    for(let i = 1; i < timeSeries.length; i++) {
        sum += duration;
        sum -= Math.max(duration - (timeSeries[i] - timeSeries[i - 1]), 0);
    }
    
    return sum;
};