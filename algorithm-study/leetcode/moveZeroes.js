/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    const zero = [];
    const result = [];
    
    while (nums.length) {
        if (nums[0] === 0) zero.push(nums.shift());
        else result.push(nums.shift());
    }
    
    for (let i = 0; i < result.length; i++) {
        nums.push(result[i]);
    }
    
    for (let i = 0; i < zero.length; i++) {
        nums.push(zero[i]);
    }
};