/**
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * @param {number[]} arr
 * @return {number[]}
 */

var replaceElements = function(arr) {
    if (arr.length === 1) return [-1];
    
    const result = [-1];
    let max = -1;
    for(let i = arr.length - 1; i > 0; i--) {
        max = Math.max(max, arr[i]);
        result.unshift(max);
    }
    
    return result;
};