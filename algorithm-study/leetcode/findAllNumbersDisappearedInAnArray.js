/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const result = [];
    
    for(let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) result.push(i);
    }
    
    return result;
};