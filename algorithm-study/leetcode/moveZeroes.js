/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    const zero = [];
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zero.push(nums[i]);
        else result.push(nums[i]);
    }
    
    return [...result, ...zero];
};