/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let maxIndex = 0;
    let maxNum = -Infinity;
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
            maxIndex = i;
        }
    }
    
    return maxIndex;
};