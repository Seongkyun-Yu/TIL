/**
 * https://leetcode.com/problems/find-pivot-index/
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    
    let acc = 0;
    for(let i = 0; i < nums.length; i++) {
        if (acc === sum - acc - nums[i]) return i;
        acc += nums[i];
    }
    
    return -1;
};