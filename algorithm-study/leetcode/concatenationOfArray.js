/**
 * https://leetcode.com/problems/concatenation-of-array/
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    const result = new Array(nums.length);
    for(let i = 0; i < nums.length; i++) {
        result[i] = nums[i];
        result[i + nums.length] = nums[i];
    }
    return result;
};