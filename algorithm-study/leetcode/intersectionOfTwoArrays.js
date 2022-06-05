/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const numSet1 = new Set(nums1);
    const numSet2 = new Set(nums2);
    
    const result = [];
    
    
    for (const num of numSet1) {
        if (numSet2.has(num)) result.push(num);
    }
    
    return result;
};