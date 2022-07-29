/**
 * https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
    let sum = 0;    
    const sortedArr = arr.sort((a, b) => a - b);
    const exceptIndex = arr.length * 0.05;
    
    for(let i = exceptIndex; i < sortedArr.length - exceptIndex; i++) {
        sum += sortedArr[i];
    }
    
    return sum / (arr.length - (exceptIndex * 2));
};