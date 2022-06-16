/**
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if ((nums[i] + "").length % 2 === 0) count++;
    }
    
    return count;
};