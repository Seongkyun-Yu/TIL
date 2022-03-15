/**
 * https://leetcode.com/problems/duplicate-zeros/
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) continue;
        
        arr.pop();
        arr.splice(i, 0, 0);
        i++;
    }
};