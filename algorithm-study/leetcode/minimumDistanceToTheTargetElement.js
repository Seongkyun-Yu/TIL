/**
 * https://leetcode.com/problems/minimum-distance-to-the-target-element/
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
 var getMinDistance = function(nums, target, start) {
    if (nums[start] === target) return 0;
    
    let min = Infinity;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) continue;
        
        min = Math.min(min, Math.abs(i - start));
    }
    
    return min;
};