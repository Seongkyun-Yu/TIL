/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {       
    const sortedNum = nums.sort((a,b) => b - a);
    
    return sortedNum[k - 1];
};