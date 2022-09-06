/**
 * https://leetcode.com/problems/maximum-ascending-subarray-sum/
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    let temp = 0;
    let max = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) temp += nums[i];
        else temp = nums[i];
        
        max = Math.max(temp, max);
    }
    
    return max;
};