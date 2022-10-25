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

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    for(let i = 0, zeroPos = 0; i < nums.length; i++) {
        if (nums[i] !== 0){ 
            [nums[i], nums[zeroPos]] = [nums[zeroPos], nums[i]];
            zeroPos++
        }
    }
};