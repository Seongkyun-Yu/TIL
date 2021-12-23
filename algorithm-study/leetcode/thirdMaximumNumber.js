/**
 * https://leetcode.com/problems/third-maximum-number/
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    nums.sort((a, b) => b - a);
        
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === result[result.length - 1]) continue;
        result.push(nums[i]);
        
        if (result.length === 3) return result[2];
    }
    
    return result[0];
};