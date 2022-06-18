/**
 * https://leetcode.com/problems/array-partition-i/
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    const sortedNums = nums.sort((a, b) => b - a);
    
    let sum = 0;    
    for(let i = 1, j = 0; j < (nums.length / 2); i += 2, j++) {
        sum += nums[i];
    }
    
    return sum;
};