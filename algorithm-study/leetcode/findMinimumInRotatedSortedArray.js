/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
        else if (nums[mid - 1] > nums[mid]) return nums[mid];
        
        if (nums[mid] > nums[0]) left = mid + 1;
        else right = mid - 1;
    }
    
    return nums[0];
};