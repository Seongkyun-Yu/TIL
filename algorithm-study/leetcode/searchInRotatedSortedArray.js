/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    let mid = 0;
    while(left < right) {
        mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    if (nums[mid] === target) return mid;
    
    left = 0;
    right = nums.length - 1;
    let pivot = mid;
    while (left <= right) {
        if (nums[pivot] === target) return pivot;
        if (nums[right] < target) right = pivot - 1;
        else left = pivot + 1;
        
        pivot = Math.floor((left + right) / 2)
    }
    
    return -1;
};