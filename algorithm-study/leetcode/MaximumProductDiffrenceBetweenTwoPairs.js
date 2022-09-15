/**
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    const sortedNums = nums.sort((a, b) => b - a);
    const len = sortedNums.length;
    
    return (sortedNums[0] * sortedNums[1]) - (sortedNums[len - 1] * sortedNums[len - 2]);
};