/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let i = 0;
    
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === val) continue;
        
        nums[i] = nums[j];
        i++;
    }
    
    return i;
};