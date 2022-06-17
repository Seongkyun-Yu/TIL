/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    const result = [];
    let acc = 0;
    
    for(const num of nums) {
        acc += num;
        result.push(acc);
    }
    
    return result;
};