/**
 * https://leetcode.com/problems/find-the-middle-index-in-array/
 * @param {number[]} nums
 * @return {number}
 */
 var findMiddleIndex = function(nums) {
    let total = nums.reduce((acc, cur) => acc + cur, 0);
    
    let curAcc = 0;
    for(let i = 0; i < nums.length; i++) {
        if (total - nums[i] === curAcc) return i;
        total -= nums[i];
        curAcc += nums[i];
    }
    
    return -1;
};