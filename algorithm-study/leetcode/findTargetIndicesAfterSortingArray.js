/**
 * https://leetcode.com/problems/find-target-indices-after-sorting-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    nums.sort((a , b) => a - b);
    
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === target) result.push(i);
    }
    
    return result;
};