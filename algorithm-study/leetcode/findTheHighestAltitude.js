/**
 * https://leetcode.com/problems/find-the-highest-altitude/
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
    let highest = 0;
    let acc = 0;
    for(let i = 0; i < gain.length; i++) {
        acc += gain[i]
        highest = Math.max(highest, acc);
    }
    
    return highest;
};