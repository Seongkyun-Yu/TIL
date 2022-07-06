/**
 * https://leetcode.com/problems/create-target-array-in-the-given-order/
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    const result = [];
    
    for(const i in nums) {
        result.splice(index[i], 0, nums[i]);
    }
    
    return result;
};