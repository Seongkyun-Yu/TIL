/**
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < sorted.length + 1; i++) {
        if (sorted[i] !== i) return i;
    }
};