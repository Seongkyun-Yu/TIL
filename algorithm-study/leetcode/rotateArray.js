/**
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const result = [];
    const len = nums.length;
    
    for(let i = 0; i < len; i++) {
        result[(i + k) % len] = nums[i];    
    }
    
    for(let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }
};