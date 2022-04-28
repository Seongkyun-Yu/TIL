/**
 * https://leetcode.com/problems/single-number-ii/
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const numCount = {};
    
    for(let i = 0; i < nums.length; i++) {
        numCount[nums[i]] = numCount[nums[i]] + 1 || 1;
        if (numCount[nums[i]] === 3) delete numCount[nums[i]];
    }
    
    for (const key in numCount) return +key;
};