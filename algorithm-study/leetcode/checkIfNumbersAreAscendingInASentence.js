/**
 * https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
    const nums = s.split(' ').filter(token => !isNaN(token)).map(num => Number(num));
    
    for(let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) return false;
    }
    
    return true;
};