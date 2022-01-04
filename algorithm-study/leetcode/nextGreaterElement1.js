/**
 * https://leetcode.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    const maxNum = Math.max(...nums2);
    const result = [];
    
    for(let i = 0; i < nums1.length; i++) {
        if (maxNum === nums1[i]) {
            result.push(-1);
            continue;
        }
            
        const fIndex = nums2.indexOf(nums1[i]);
        
        if (fIndex === nums2.length - 1) {
            result.push(-1)
            continue;
        }
        
        for (let j = fIndex + 1; j < nums2.length; j++) {
            if (nums1[i] < nums2[j]) {
                result.push(nums2[j])
                break;
            } else if (j === nums2.length - 1) {
                result.push(-1)
            }
        }
        
    }
    
    return result;
};