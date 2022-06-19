/**
 * https://leetcode.com/problems/kth-missing-positive-number/
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
    let count = 0;    
    let i = 0;
    let j = 0;
    while(count < k) {
        i++;
        if (i !== arr[j]) count++;
        else j++;
    }
    
    return i;
};